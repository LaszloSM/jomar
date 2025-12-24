import { Component, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { ScrollAnimationService } from '../services/scroll-animation.service';

@Component({
  selector: 'app-values',
  standalone: true,
  templateUrl: './values.html',
  styleUrls: ['./values.css'],
})
export class Values implements OnInit, OnDestroy {
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
