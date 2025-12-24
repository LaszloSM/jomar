import { Component, OnInit, OnDestroy, ElementRef } from '@angular/core';
import { ScrollAnimationService } from '../services/scroll-animation.service';

@Component({
  selector: 'app-service-lines',
  standalone: true,
  templateUrl: './service-lines.html',
  styleUrls: ['./service-lines.css'],
})
export class ServiceLines implements OnInit, OnDestroy {
  constructor(
    private scrollAnimationService: ScrollAnimationService,
    private elementRef: ElementRef
  ) {}

  ngOnInit(): void {
    this.scrollAnimationService.observeElements(this.elementRef);
  }

  ngOnDestroy(): void {
    this.scrollAnimationService.disconnect();
  }
}
