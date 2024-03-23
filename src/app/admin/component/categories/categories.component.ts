import { authGuard } from './../../../Gurads/auth.guard';
import { Icategory, Itable } from './../../Module/icategory';
import { PageEvent } from '@angular/material/paginator';

import { CategoriesService } from './../../service/categories.service';
import { Component, OnInit } from '@angular/core';
import { AddEditCategoryComponent } from '../add-edit-category/add-edit-category.component';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { DeletComponent } from 'src/app/shared/delet/delet.component';




@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit{
  is_message:string='';
  searchKey:string='';
  userName:string|any=localStorage.getItem('userName');
  
   tableHead: Itable[]=[];

   totalRespose: any={};

   length = 50;
   pageSize = 2;
   pageIndex = 0 ;
   pageSizeOptions = [5, 10, 25];
  pageEvent: PageEvent|any;
openDeletCategoryDialog: any;
color: any;
 
  





constructor(private catgSrv:CategoriesService,
  public dialog: MatDialog,
  private toastr: ToastrService){


}
  ngOnInit(): void {
    // throw new Error('Method not implemented.');



this.getCategories();

  }
  
// ----------------getCategories
  getCategories(){
    console.log(this.searchKey);
this.catgSrv.getAllGategories( 
  this.pageSize,this.pageIndex +1,this.searchKey).subscribe({
  next:(res)=>{
    console.log(res);
    this.tableHead=res.data;
   this.totalRespose=res;
   
    
    
  },
  error:(err)=>{
    console.log(err);
    
  }
  ,
  complete:()=>{
    console.log('---categories complet----------');
    
  }
})






  }

  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    console.log(this.pageEvent);
    
    this.length = e.length;
    this.pageSize = e.pageSize;
    // this.pageIndex = e.pageIndex;
    this.pageIndex=this.totalRespose?.pageNumber;
   console.log(this.pageIndex);
   
    this.getCategories()
  }






  // ----------------------openDialogAddCategory to add Catogery--------------

    openDialogAddCategory(enterAnimationDuration: string, exitAnimationDuration:string): void {
      const dialogRef = this.dialog.open(AddEditCategoryComponent, {
        width: '500px',
        enterAnimationDuration,
        exitAnimationDuration,
        
        data: {
          is_Admin: this.userName,
          dialogWork:'Add-Category'},
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed adddd',result);
       console.log(result);
       if(result){
        this.AddCategory(result);
       }else{
        this.toastr.error('add catogery: try add  again' ,'Toastr fun!');
    
       }
      
      });
    }
    // ====================== AddCategory===========
    AddCategory(result:string){
this.catgSrv.onAddCategory(result).subscribe(
  {

next:(res)=>{
  console.log(res);
  this.is_message=res.name + res.id;
},
error:(err)=>{
  console.log(err);
  
},
complete:()=>{
console.log('-----add catogery complet--------');
this.getCategories();
this.toastr.success('add catogery '+ this.is_message, 'Toastr fun!');
      
}

  })
    }




  // ----------------------openDialogEditCategory to Edit Catogery--------------
  openDialoEditCategory(enterAnimationDuration: string, exitAnimationDuration:string,dataCat:any): void {
  const dialogRef = this.dialog.open(AddEditCategoryComponent, {
    width: '500px',
    enterAnimationDuration,
    exitAnimationDuration,


   data: 
   {
       
      is_Admin:this.userName,
      names:dataCat.name,
      is_dataItemeCat:dataCat,
      dialogWork:'Edit-Category'},
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed editttt',result);
   console.log(result);
   if(result){
    this.editCategory(result);
   }else{
    this.toastr.error('edit catogery: try edit again' ,'Toastr fun!');

   }
  
  });




}
editCategory(result:any){
console.log(result);
console.log(result.is_dataItemeCat.id);
console.log(result.names);
this.catgSrv.onEditCategory(result.is_dataItemeCat.id,result.names).subscribe({
next:(res)=> {
  console.log(res);
  this.getCategories()
  this.is_message=res.name+res.id

},
error:(err)=>{

},
complete:()=>{
console.log('-----------complet-----edit');
this.toastr.success('edit catogery '+ this.is_message, 'Toastr fun!');

}


})

}


// ---------------------------------

// ====================Delet Category========

openDeletDialog(enterAnimationDuration: string, exitAnimationDuration:string,
  
  itemData:any): void {
  
  
  
  const dialogRef = this.dialog.open(DeletComponent, {
    width: '500px',
    enterAnimationDuration,
    exitAnimationDuration,
    data: {name: 'lllll', animal: 'ankkkk',item:itemData,
  }});

  dialogRef.afterClosed().subscribe(result => {


    console.log('The dialog was closed',result);
    if(result){
      this.deleCategory(result)
    }
   else{
    this.toastr.error('edit catogery: try edit again' ,'Toastr fun!');

   }


    // this.animal = result;
  });
}
deleCategory(result:any){

  this.catgSrv.onDeletCategory(result).subscribe({
    next:(res)=>{
console.log(res);
this.is_message;
    },
    error:(err)=>{
console.log(err);

    },
    complete:()=>{
      console.log('-----delet complet-------');
      this.getCategories();
      this.toastr.success('delet catogery sucssfuly', 'Toastr fun!');


    }
  })

}



// =========================search by name =======================

searchCategory(){
  
  this.getCategories();
}



}

  


