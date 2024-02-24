import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { AuthService } from '../../authService/auth.service';
import { Login } from '../../moduleAut/login';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';
import { ForgetPasswordComponent } from '../forget-password/forget-password.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {


 

  is_message:string='';
 is_result:string='';
  toastrService: any;
  is_email_forgetPass:string='';
  // animal: any;
  // name: any;
constructor(
 private _Router:Router,
  public dialog: MatDialog,
  private auth:AuthService,
  private toastr: ToastrService){

}


  // ----------Reactive Forme------------ 
loginForm=new FormGroup({
    email:new FormControl('ahmedelborgy130@gmail.com',[
    Validators.required,
    Validators.email,
    Validators.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)

  ]),

  password:new FormControl(null,[
    Validators.required,
    Validators.minLength(6),
    // Validators.pattern(/^[A-Z][a-z-0-9]{5,16}$/)
    Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()-_=+[\]{}|\\;:'",.<>/?]).{6,}$/)
  
  ])
})







// -----------Method signIn()
signIn(loginForm:FormGroup){


if(this.loginForm.valid){
  console.log('-----valid---');
  console.log(loginForm.value);
  this.auth.logIn(loginForm.value).subscribe({
    next:(res)=>{
      console.log(res);

      localStorage.setItem('userToken',res.token);

      this.auth.getProfoile();
 this._Router.navigate(['/dashbordes']);

    
      // console.log(res.message);
    },
    error:(err)=>{
      console.log(err);
      
      console.log(err.error.message);
      this.is_message=err.error.message;
      this.toastr.error('login:' +this.is_message ,'Toastr fun!');
      //  this.toastrService.error('everything is broken', 'Major Error', {
      //   positionClass: 'toast-top-left',
      // });

      

     
    },
    complete:()=>{
      console.log('---------complet------------')
      this.is_message='sucsses'
     
       this.toastr.success('login'+ this.is_message, 'Toastr fun!');
      
    
    }

  })
}

else{
  console.log('-----In valid---');
}















}

// <!-- ------------------------openDialog Have a forget password-------------------------- -->

openDialog(){
  // when dialog open and send data to dialoge this data sort in data:{} 
  const dialogRef = this.dialog.open(ForgetPasswordComponent, {
    data: {name:''},
  });



  dialogRef.afterClosed().subscribe((result: any) => {
    console.log('The dialog was closed', result);
 this.is_email_forgetPass=result.value.email;
//  alert(this.is_email_forgetPass)
//  localStorage.setItem('is_email_forgetPass', this.is_email_forgetPass);
// this._Router.navigate(['/reset-password'])
  this.onForgetPassw(result);

  // console.log(result.value);

  // this.onForgetPassw(result )
  
  });





  
  



}
// <!-- ------------------------openDialog Have a forget password-------------------------- -->

onForgetPassw(result:FormGroup){


  if(result.valid){

    console.log('-----vail-------');

    console.log(result);
    
    console.log('------------');
    
    this.auth.sendEmailForgetPass(result.value).subscribe({
    next:(res)=>{
      console.log(res);
      this.is_message='sucsses'
      this.toastr.success('request'+ this.is_message, 'Toastr fun!');
      // alert(this.is_email_forgetPass);
       localStorage.setItem('is_email_forgetPass', this.is_email_forgetPass);
      this._Router.navigate(['/reset-password'])
    
      
    },error:(err)=>{
      console.log(err);
      this.is_message=err.error.message;
      this.toastr.error('request:' +this.is_message ,'Toastr fun!');
    
    
    }
    
    })

  }else{
    console.log('---inv--------');
    
  }



// this.auth.sendEmailForgetPass(result).subscribe({

  
//   next:(res)=>{
//     console.log(res);
    
//   },
//   error:(err)=>{
//     console.log(err);
    
//   },
//   complete:()=>{
//     console.log('----forget email------');
    
//   }
// })



}










}



