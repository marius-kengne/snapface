import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  imports: [RouterLink],
  standalone: true
})
export class LandingPageComponent {

  constructor(private router: Router){}

  navigateToFaceSnaps(): void {
    this.router.navigateByUrl('facesnaps');
  }
}
