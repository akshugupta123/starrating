// star-rating.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarRatingComponent } from './star-rating.component';

@NgModule({
  declarations: [StarRatingComponent], // Make sure StarRatingComponent is declared here
  imports: [
    CommonModule
  ],
  exports: [StarRatingComponent] // Make sure to export StarRatingComponent
})
export class StarRatingModule { }
