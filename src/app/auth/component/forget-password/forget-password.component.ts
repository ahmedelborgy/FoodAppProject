import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent {
  constructor(
    public dialogRef: MatDialogRef<ForgetPasswordComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any) {}


// ------------------to close dialoge---------------
onNoClick(): void {
  this.dialogRef.close();
}

// Reactive Form
forgetPasswordForm= new FormGroup({
  email:new FormControl(null,[
    Validators.required,
    Validators.email,
    Validators.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)

  ])


})



}
