import { AddEditRecipeyComponent } from './component/add-edit-recipey/add-edit-recipey.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from './recipes.component';

const routes: Routes = [
//   { path: '', component: AdminComponent },
//   {path:'categories',component:CategoriesComponent},
  {path:'',component:RecipesComponent},

  {path:'add',component:AddEditRecipeyComponent},

  {path:'edit/:id',component:AddEditRecipeyComponent}



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipesRoutingModule { }
