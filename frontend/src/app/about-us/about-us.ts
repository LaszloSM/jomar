import { Component, OnInit, OnDestroy, ElementRef } from '@angular/core';
import { ScrollAnimationService } from '../services/scroll-animation.service';

@Component({
  selector: 'app-about-us',
  standalone: true,
  templateUrl: './about-us.html',
  styleUrls: ['./about-us.css'],
})
export class AboutUs implements OnInit, OnDestroy {
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
