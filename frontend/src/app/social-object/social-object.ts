import { Component, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { ScrollAnimationService } from '../services/scroll-animation.service';

@Component({
  selector: 'app-social-object',
  standalone: true,
  templateUrl: './social-object.html',
  styleUrls: ['./social-object.css'],
})
export class SocialObject implements OnInit, OnDestroy {
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
