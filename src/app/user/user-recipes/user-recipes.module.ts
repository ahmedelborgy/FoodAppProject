import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRecipesRoutingModule } from './user-recipes-routing.module';
import { UserRecipesComponent } from './user-recipes.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RecpeyDeteailesComponent } from './component/recpey-deteailes/recpey-deteailes.component';


@NgModule({
  declarations: [
    UserRecipesComponent,
    RecpeyDeteailesComponent
  ],
  imports: [
    CommonModule,
    UserRecipesRoutingModule,
    SharedModule
  ]
})
export class UserRecipesModule { }
