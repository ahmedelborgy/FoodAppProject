import { userGuard } from './../Gurads/user.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashbordesComponent } from './dashbordes.component';
import { HomeComponent } from './home/home.component';
import { adminGuard } from '../Gurads/admin.guard';

const routes: Routes = [
  
  
  { path: '', component: DashbordesComponent ,children:[
    {path:'home',component:HomeComponent},
    {path: 'admin',canActivate:[adminGuard], loadChildren: () => import('../admin/admin.module').then(m => m.AdminModule) }, 
    {path: 'user',canActivate:[userGuard], loadChildren: () => import('../user/user.module').then(m => m.UserModule) },
    
  ]},
  // {path:'home',component:HomeComponent},
  // {path: 'admin', loadChildren: () => import('../admin/admin.module').then(m => m.AdminModule) }, 
  // {path: 'user', loadChildren: () => import('../user/user.module').then(m => m.UserModule) },
  


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashbordesRoutingModule { }

