import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserLoggedRoutingModule } from './user-logged-routing.module';
import { UserLoggedComponent } from './user-logged.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DeletUserComponent } from './component/delet-user/delet-user.component';


@NgModule({
  declarations: [
    UserLoggedComponent,
    DeletUserComponent,
    
  ],
  imports: [
    CommonModule,
    UserLoggedRoutingModule,
  SharedModule
  ]
})
export class UserLoggedModule { }
