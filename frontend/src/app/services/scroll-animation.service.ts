import { Injectable, ElementRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollAnimationService {
  private observer: IntersectionObserver | null = null;

  constructor() {
    // Inicializar observer solo en el navegador
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      this.initObserver();
    }
  }

  private initObserver(): void {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Opcionalmente, dejar de observar después de la animación
            // this.observer?.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1, // El elemento debe ser 10% visible
        rootMargin: '0px 0px -50px 0px' // Pequeño offset desde abajo
      }
    );
  }

  observeElements(container: ElementRef): void {
    if (this.observer && container.nativeElement) {
      const elements = container.nativeElement.querySelectorAll('.animate-on-scroll');
      elements.forEach((el: Element) => {
        this.observer?.observe(el);
      });
    }
  }

  disconnectObserver(): void {
    this.observer?.disconnect();
  }

  disconnect(): void {
    this.disconnectObserver();
  }
}
