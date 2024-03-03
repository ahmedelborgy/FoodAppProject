import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { CategoriesComponent } from './component/categories/categories.component';
import { DashbordesModule } from '../dashbordes/dashbordes.module';
import { SharedModule } from '../shared/shared.module';
import { AddEditCategoryComponent } from './component/add-edit-category/add-edit-category.component';
import { RecipesComponent } from './recipes/recipes.component';


@NgModule({
  declarations: [
    AdminComponent,
    CategoriesComponent,
    AddEditCategoryComponent,
    RecipesComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    DashbordesModule,
    SharedModule
  ]
})
export class AdminModule { }
