import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { ToastrModule } from 'ngx-toastr';
import {MatDialogModule} from '@angular/material/dialog';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';

import {Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
@NgModule({
  declarations: [
    SidebarComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
   RouterModule,
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
    MatDialogModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule

  ],
  exports:[
    SidebarComponent,
    NavbarComponent,
    HttpClientModule,
    ReactiveFormsModule,
    // BrowserAnimationsModule, // required animations module
    ToastrModule // ToastrModule added
    ,
     NgxDropzoneModule ,
     MatDialogModule,

     MatIconModule,
     MatMenuModule,
     MatButtonModule

  ]
})
export class SharedModule { }
