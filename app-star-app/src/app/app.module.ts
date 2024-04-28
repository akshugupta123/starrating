// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// Import StarRatingModule
import { StarRatingModule } from './star-rating/star-rating.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StarRatingModule // Add StarRatingModule here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
