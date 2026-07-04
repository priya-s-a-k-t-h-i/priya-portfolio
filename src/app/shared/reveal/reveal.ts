import { Directive, ElementRef, OnDestroy, OnInit, inject } from '@angular/core';

/**
 * Adds a quiet fade/translate reveal as the host element enters the
 * viewport. Progressive enhancement by design: the element is only ever
 * hidden by JS, after confirming motion is allowed — so no-JS and
 * prefers-reduced-motion users always see content immediately, never a
 * permanently-invisible element waiting on an observer that opted out.
 */
@Directive({
  selector: '[appReveal]',
  standalone: true,
})
export class Reveal implements OnInit, OnDestroy {
  private readonly element = inject(ElementRef<HTMLElement>).nativeElement;
  private observer?: IntersectionObserver;

  ngOnInit(): void {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      return;
    }

    this.element.classList.add('reveal');

    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.element.classList.add('reveal--visible');
          this.observer?.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -80px 0px' },
    );

    this.observer.observe(this.element);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
