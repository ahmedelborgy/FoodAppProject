import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { AuthService } from 'src/app/auth/authService/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
userName:string|any=localStorage.getItem('userName');
 


constructor(private auth:AuthService ,private toastr:ToastrService){}
myLogOut(){
  this.toastr.success('LogOut', 'logOut successfuly');

  this.auth.logout();

}

}
