import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashbordesRoutingModule } from './dashbordes-routing.module';
import { DashbordesComponent } from './dashbordes.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    DashbordesComponent,
    HomeComponent,
    
  ],
  imports: [
    CommonModule,
    DashbordesRoutingModule,
    SharedModule
  ],
  exports:[
    HomeComponent,
  
  ]
})
export class DashbordesModule { }

