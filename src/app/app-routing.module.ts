import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './Gurads/auth.guard';

const routes: Routes = [
   {path:'',redirectTo:'auth',pathMatch:'full'},
   {path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  //  {path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) }, 
  //  {path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },
   
   { path: 'dashbordes', canActivate:[authGuard],loadChildren: () => import('./dashbordes/dashbordes.module').
   then(m => m.DashbordesModule) }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
