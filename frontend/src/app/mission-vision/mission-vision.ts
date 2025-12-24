import { Component, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { ScrollAnimationService } from '../services/scroll-animation.service';

@Component({
  selector: 'app-mission-vision',
  standalone: true,
  templateUrl: './mission-vision.html',
  styleUrls: ['./mission-vision.css'],
})
export class MissionVision implements OnInit, OnDestroy {
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
