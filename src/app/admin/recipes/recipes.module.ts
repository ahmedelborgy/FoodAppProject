import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipesRoutingModule } from './recipes-routing.module';
// import { DashbordesModule } from 'src/app/dashbordes/dashbordes.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { RecipesComponent } from './recipes.component';
import { AddEditRecipeyComponent } from './component/add-edit-recipey/add-edit-recipey.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
   RecipesComponent,
   AddEditRecipeyComponent
  ],
  imports: [
    CommonModule,
    RecipesRoutingModule,
    // DashbordesModule,
    SharedModule,
    FormsModule,
  ]
})
export class RecipesModule { }
