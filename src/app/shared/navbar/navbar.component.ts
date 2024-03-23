import { IcurrentUser, currentUser } from './../../auth/moduleAut/icurrent-user';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { AuthService } from 'src/app/auth/authService/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
userName:string|any=localStorage.getItem('userName');
currentUser:IcurrentUser={};
pathImag:string='https://upskilling-egypt.com:443/'
dummyImg:string='../../../assets/image/recipy-images.jpeg'
ImgUser:string='';

constructor(private auth:AuthService ,private toastr:ToastrService){}




ngOnInit(){
this.onGetCurrentUser()
}

onGetCurrentUser(){
this.auth.currentUser().subscribe({
  next:(res)=>{
// console.log(res);
this.currentUser=res;
console.log(this.currentUser);
// this.ImgUser='https://upskilling-egypt.com:443/'+this.currentUser['imagePath'];
this.ImgUser=this.currentUser['imagePath'];


console.log(this.ImgUser);

  },
error:(err)=>{
  console.log(err);
  
},
complete:()=>{
  console.log('----complet-current ------');
  
}
})
}






myLogOut(){
  this.toastr.success('LogOut', 'logOut successfuly');

  this.auth.logout();

}

















}
