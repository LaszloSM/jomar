import { Component, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { ScrollAnimationService } from '../services/scroll-animation.service';

@Component({
  selector: 'app-commitment',
  standalone: true,
  templateUrl: './commitment.html',
  styleUrls: ['./commitment.css'],
})
export class Commitment implements OnInit, OnDestroy {
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
