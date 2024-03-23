import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { CategoriesComponent } from './component/categories/categories.component';
import { RecipesComponent } from './recipes/recipes.component';

const routes: Routes = [
  { path: '', component: AdminComponent },
  {path:'categories',component:CategoriesComponent},

  // {path:'recipes',component:RecipesComponent}

  {path: 'userLogged', 
  loadChildren: () => import('../admin/user-logged/user-logged.module')
  .then(m => m.UserLoggedModule) }, 



  {path: 'recipes', loadChildren: () => 
  import('../admin/recipes/recipes.module')
  .then(m => m.RecipesModule) }, 


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
