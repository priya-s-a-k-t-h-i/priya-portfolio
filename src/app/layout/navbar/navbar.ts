import { AfterViewInit, Component, HostListener, OnDestroy, signal } from '@angular/core';
import { navCta, navigation } from '@content/navigation';
import { site } from '@content/site';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar implements AfterViewInit, OnDestroy {
  protected readonly site = site;
  protected readonly navItems = navigation;
  protected readonly navCta = navCta;

  protected readonly isScrolled = signal(false);
  protected readonly isMenuOpen = signal(false);
  protected readonly activeSectionId = signal<string | null>(null);

  private observer?: IntersectionObserver;

  @HostListener('window:scroll')
  protected onWindowScroll(): void {
    this.isScrolled.set(window.scrollY > 8);
  }

  @HostListener('document:keydown.escape')
  protected onEscape(): void {
    this.isMenuOpen.set(false);
  }

  ngAfterViewInit(): void {
    this.observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) {
          this.activeSectionId.set(visible.target.id);
        }
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    );

    for (const item of this.navItems) {
      const target = document.getElementById(item.sectionId);
      if (target) {
        this.observer.observe(target);
      }
    }
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
