import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

// Every component must be declared in exactly one NgModule.
// You didn't declare the HeroesComponent. So why did the application work?
// It worked because the Angular CLI declared HeroesComponent in the AppModule when it generated that component.
//command: ng generate component heroes 
@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent
  ],
  imports: [
    BrowserModule,
    // add FormsModule to the @NgModule metadata's imports array, which contains a list of external modules that the app needs.
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
