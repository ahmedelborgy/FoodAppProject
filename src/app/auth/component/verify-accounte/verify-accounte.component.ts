import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-verify-accounte',
  templateUrl: './verify-accounte.component.html',
  styleUrls: ['./verify-accounte.component.scss']
})
export class VerifyAccounteComponent {



  constructor(
    public dialogRef: MatDialogRef<VerifyAccounteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}



// Reactive Forme

verifyForm=new FormGroup({

  email:new FormControl(null,[
    Validators.required,
    Validators.email,
    Validators.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)

  ]),
  code:new FormControl(null,[
    Validators.required
  ])


  
})




    onNoClick(): void {
      this.dialogRef.close();
    }


}
