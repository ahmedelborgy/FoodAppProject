import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './Gurads/auth.guard';

const routes: Routes = [
   {path:'',redirectTo:'auth',pathMatch:'full'},
   {path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  //  {path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) }, 
  //  {path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
   
   { path: 'dashbordes', canActivate:[authGuard],loadChildren: () => import('./dashbordes/dashbordes.module').
   then(m => m.DashbordesModule) },
   { path: 'user-Recipes', loadChildren: () => import('./user/user-recipes/user-recipes.module').then(m => m.UserRecipesModule) },
   { path: 'Faviorets', loadChildren: () => import('./user/faviorets/faviorets.module').then(m => m.FavioretsModule) },
   { path: 'userLogged', loadChildren: () => import('./admin/user-logged/user-logged.module').then(m => m.UserLoggedModule) },
   
  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
