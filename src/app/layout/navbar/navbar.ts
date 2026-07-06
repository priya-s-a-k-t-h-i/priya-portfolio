import { Component, HostListener, OnDestroy, afterEveryRender, signal } from '@angular/core';
import { navCta, navigation } from '@content/navigation';
import { site } from '@content/site';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar implements OnDestroy {
  protected readonly site = site;
  protected readonly navItems = navigation;
  protected readonly navCta = navCta;

  protected readonly isScrolled = signal(false);
  protected readonly isMenuOpen = signal(false);
  protected readonly activeSectionId = signal<string | null>(null);

  private observer?: IntersectionObserver;

  constructor() {
    // Not ngAfterViewInit, and not a single afterNextRender either.
    //
    // Root cause: Navbar and the routed page are siblings in app.html (not
    // parent/child), so ngAfterViewInit — which only guarantees Navbar's
    // own view is ready — fired before the routed sections existed in the
    // DOM. document.getElementById() silently returned null for all five,
    // the `if (target)` guard skipped every one, and the observer sat
    // watching nothing, forever.
    //
    // A single afterNextRender isn't enough either: the *first* render
    // Angular completes is the initial app shell (navbar + an empty
    // router-outlet) — the Router resolves and inserts the routed Home
    // page, with all its sections, in a later render pass. So this checks
    // on every render, does nothing until all five sections actually
    // exist, and then disconnects itself — correct regardless of how many
    // render passes routing takes, without hardcoding assumptions about
    // Router internals.
    const ref = afterEveryRender(() => {
      if (this.observer) {
        return;
      }

      const targets = this.navItems
        .map((item) => document.getElementById(item.sectionId))
        .filter((element): element is HTMLElement => element !== null);

      if (targets.length !== this.navItems.length) {
        return;
      }

      this.observer = new IntersectionObserver(
        (entries) => {
          const visible = entries.find((entry) => entry.isIntersecting);
          if (visible) {
            this.activeSectionId.set(visible.target.id);
          }
        },
        { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
      );

      for (const target of targets) {
        this.observer.observe(target);
      }

      ref.destroy();
    });
  }

  @HostListener('window:scroll')
  protected onWindowScroll(): void {
    this.isScrolled.set(window.scrollY > 8);
  }

  @HostListener('document:keydown.escape')
  protected onEscape(): void {
    this.isMenuOpen.set(false);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  protected toggleMenu(): void {
    this.isMenuOpen.update((open) => !open);
  }

  protected closeMenu(): void {
    this.isMenuOpen.set(false);
  }
}
