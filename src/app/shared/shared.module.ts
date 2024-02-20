import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { ToastrModule } from 'ngx-toastr';
import {MatDialogModule} from '@angular/material/dialog';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,

    ToastrModule.forRoot({closeButton:true,
      timeOut: 10000,
    positionClass: 'toast-top-right',
    preventDuplicates: true,
    progressAnimation:'increasing',
    progressBar:true
    })
    ,
    NgxDropzoneModule,
    MatDialogModule
  ],
  exports:[
    HttpClientModule,
    ReactiveFormsModule,
    // BrowserAnimationsModule, // required animations module
    ToastrModule // ToastrModule added
    ,
     NgxDropzoneModule ,
     MatDialogModule
  ]
})
export class SharedModule { }
