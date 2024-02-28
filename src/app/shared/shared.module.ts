import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { ToastrModule } from 'ngx-toastr';
import {MatDialogModule} from '@angular/material/dialog';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';

import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';

import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { DeletComponent } from './delet/delet.component';

@NgModule({
  declarations: [
    SidebarComponent,
    NavbarComponent,
    DeletComponent
  ],
  imports: [
    CommonModule,
   RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
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
    MatButtonModule,

    MatTableModule, MatPaginatorModule

  ],
  exports:[
    SidebarComponent,
    DeletComponent,
    FormsModule,

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
     MatButtonModule,
     MatTableModule,
      MatPaginatorModule

  ]
})
export class SharedModule { }
