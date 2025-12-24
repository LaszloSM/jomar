
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Hero } from './hero/hero';
import { AboutUs } from './about-us/about-us';
import { SocialObject } from './social-object/social-object';
import { MissionVision } from './mission-vision/mission-vision';
import { Values } from './values/values';
import { ServiceLines } from './service-lines/service-lines';
import { ComplementaryServices } from './complementary-services/complementary-services';
import { WhyUs } from './why-us/why-us';
import { Commitment } from './commitment/commitment';
import { Contact } from './contact/contact';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    Header,
    Hero,
    AboutUs,
    SocialObject,
    MissionVision,
    Values,
    ServiceLines,
    ComplementaryServices,
    WhyUs,
    Commitment,
    Contact,
    Footer
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('frontend');
}
