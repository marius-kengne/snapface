import { NgModule } from '@angular/core';
import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FaceSnapComponent } from './face-snap/face-snap.component';
import { LOCALE_ID } from '@angular/core';
import { FaceSnapListComponent } from './face-snap-list/face-snap-list.component';
import { HeaderComponent } from './header/header.component';
import { provideRouter, RouterOutlet } from '@angular/router';
import { routes } from './app.routes';
import { LandingPageComponent } from './landing-page/landing-page.component';

@NgModule({
  declarations: [
    AppComponent,
    FaceSnapListComponent,
    
  ],
  imports: [
    BrowserModule,
    FaceSnapComponent,
    RouterOutlet,
    HeaderComponent,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR' },
    provideRouter(routes),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
