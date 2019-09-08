import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { FloatsLayoutComponent } from './components/floats-layout/floats-layout.component';
import { AboutSectionComponent } from './components/about-section/about-section.component';
import { ServicesComponent } from './components/services/services.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, LandingPageComponent, FloatsLayoutComponent, AboutSectionComponent, ServicesComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
