import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { CategoriesComponent } from './component/categories/categories.component';
import { DashbordesModule } from '../dashbordes/dashbordes.module';
import { SharedModule } from '../shared/shared.module';
import { AddEditCategoryComponent } from './component/add-edit-category/add-edit-category.component';

import { RecipesRoutingModule } from './recipes/recipes-routing.module';
import { UserLoggedComponent } from './user-logged/user-logged.component';
// import { UserLoggedComponent } from './component/user-logged/user-logged.component';


@NgModule({
  declarations: [
    AdminComponent,
    CategoriesComponent,
    AddEditCategoryComponent,

  
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    DashbordesModule,
    SharedModule
  ]
})
export class AdminModule { }
