import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { CategoriesComponent } from './component/categories/categories.component';

const routes: Routes = [
  { path: '', component: AdminComponent },
  {path:'categories',component:CategoriesComponent}







];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
