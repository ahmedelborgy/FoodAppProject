import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavioretsRoutingModule } from './faviorets-routing.module';
import { FavioretsComponent } from './faviorets.component';


@NgModule({
  declarations: [
    FavioretsComponent
  ],
  imports: [
    CommonModule,
    FavioretsRoutingModule
  ]
})
export class FavioretsModule { }
