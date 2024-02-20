import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../authService/auth.service';
import { Route, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent {

  is_email_forgetPass=localStorage.getItem('is_email_forgetPass');
  is_message:string=''

constructor(private auth:AuthService,private _Router:Router, private toastr: ToastrService){
// alert(this.is_email_forgetPass)
}
 





// "email": "string",
// "password": "string",
// "confirmPassword": "string",
// "seed": "string"


   resetPasswordForm=new FormGroup({
    email:new FormControl(this.is_email_forgetPass,[
      Validators.required,
      Validators.email,
      Validators.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
  
    ]),
    seed:new FormControl(null,[
      Validators.required
     
  
    ]),
    password:new FormControl(null,[
      Validators.required,
      Validators.minLength(6),
      // Validators.pattern(/^[A-Z][a-z-0-9]{5,16}$/)
      Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()-_=+[\]{}|\\;:'",.<>/?]).{6,}$/)
    
    ]),

    confirmPassword:new FormControl(null,[
      Validators.required,
      Validators.minLength(6),
      // Validators.pattern(/^[A-Z][a-z-0-9]{5,16}$/)
      Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()-_=+[\]{}|\\;:'",.<>/?]).{6,}$/)
    
    ])
   




  })




  resetPassword(resetPasswordForm:FormGroup){
console.log(resetPasswordForm);

if(resetPasswordForm.valid){


  console.log('---valid----');


this.auth.resetPass(resetPasswordForm.value).subscribe({
next:(res)=>{
  console.log(res);
  this.is_message='sucsses'
  this.toastr.success('reset password :'+ this.is_message, 'Toastr fun!');
  this._Router.navigate(['/login'])


},
error:(err)=>{
console.log(err);
this.is_message=err.error.message;
this.toastr.error('reset password:' +this.is_message ,'Toastr fun!');


},
complete:()=>{
console.log('----resp password complet---');

}

})
  
}
else{

  console.log('----In valid--------');
  
}


  }
}
