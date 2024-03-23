import { UserRecipesModule } from './user-recipes/user-recipes.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';

const routes: Routes = [
  { path: '', component: UserComponent },
  {path: 'recipes', loadChildren: () => 
  import('../user/user-recipes/user-recipes.module')
  .then(m => m.UserRecipesModule) }, 

  {path: 'faviorets', loadChildren: () => 
  import('../user/faviorets/faviorets.module')
  .then(m => m.FavioretsModule) }, 

]


;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
