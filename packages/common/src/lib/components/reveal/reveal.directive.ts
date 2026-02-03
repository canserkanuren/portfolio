import {
  Directive,
  ElementRef,
  inject,
  Input,
  OnDestroy,
  OnInit
} from '@angular/core';

@Directive({
  selector: '[csuReveal]',
  standalone: true
})
export class RevealDirective implements OnInit, OnDestroy {
  private el: ElementRef<HTMLElement> = inject(ElementRef);

  @Input() revealDelay = 0;

  private observer: IntersectionObserver | null = null;

  ngOnInit(): void {
    const el = this.el.nativeElement;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    el.style.opacity = '0';
    el.style.transform = 'translateY(1rem)';
    el.style.transition = 'opacity 500ms ease-out, transform 500ms ease-out';

    this.observer = new IntersectionObserver(
      entries => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            this.reveal();
            this.observer?.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.1 }
    );

    requestAnimationFrame(() => this.observer?.observe(el));
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    this.observer = null;
  }

  private reveal(): void {
    const el = this.el.nativeElement;
    if (this.revealDelay > 0) {
      setTimeout(() => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, this.revealDelay);
    } else {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }
  }
}
