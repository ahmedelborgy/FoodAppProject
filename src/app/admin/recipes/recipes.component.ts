import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Icategory, Itable } from '../Module/icategory';
import { CategoriesService } from '../service/categories.service';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr/toastr/toastr.service';
import { RecipyService } from '../service/recipy.service';
import { ItebleRecipey } from '../Module/irecipey';
import { HelperServiceService } from '../service/helper-service.service';
import { Itges } from '../Module/itges';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit{


constructor(
  private help:HelperServiceService,
  private RecServ:RecipyService,
  private catSer:CategoriesService,
  public dialog: MatDialog
  
  
  
  ){


}

 
  is_message:string='';
  searchKey:string='';
  userName:string|any=localStorage.getItem('userName');
  pathImag:string='https://upskilling-egypt.com:443/'
   dummyImg:string='../../../assets/image/recipy-images.jpeg'
  tableHead:  ItebleRecipey[]=[];
  tableTges:Itges[]=[];
  tableCat:Itable[]=[];
   totalRespose: any={};
   pageSize=5;
   pageNumber=1
   serchKey:string=''
   tagIdKey:any;
   catogeryKey:any;
  
   
   ngOnInit(){

this.getTages();
this.getAllCatogeries();
this.getRecipes();
   }
   
// =================getRecipy
getRecipes(){

let parmApis={
  pageSize :this.pageSize,
  pageNumber:this.pageNumber,
  name:this.searchKey,
  tagId:this.tagIdKey,
  categoryId:this.catogeryKey
}
console.log(parmApis);

  this.RecServ.getAllRecipes(parmApis).subscribe({
    next:(res)=>{
console.log(res);
this.tableHead=res.data;
console.log(this.tableHead);

    },
    error:(err)=>{
console.log(err);

    },
    complete:() =>{
      console.log('---------complet recipy-----------');
      
    },
   })
}

// ================getAllTages by using helper Service (locap)

getTages(){
  this.help.getAllTages().subscribe({
next:(res)=>{
console.log(res);
this.tableTges=res;
console.log(this.tableTges);

},
error:(err)=>{
console.log(err);

},
complete:()=>{
  console.log('-------complet get tages-------');
  
}


  })
}

getTagId(id:any){
  console.log(id);
  if(id<=0){
    id=null;
  }
  this.tagIdKey=id;
this.getRecipes()

}
getCatogeryId(id:any){
console.log(id);

}

// ==========================
getAllCatogeries(){
  
this.catSer.getAllGategories(1000,1,'').subscribe({
next:(res)=>{
console.log(res);
this.tableCat=res.data;
console.log(this.tableCat);

},

error:(err)=>{
  console.log(err);
  
},
complete:()=>{
  console.log('--------complet get all Gatogery-----');
  
}

})


}









   openDialogRecipy(){
//    this.RecServ.getAllRecipes().subscribe({
//     next:(res)=>{
// console.log(res);
// this.tableHead=res.data;
// console.log(this.tableHead);

//     },
//     error:(err)=>{
// console.log(err);

//     },
//     complete:() =>{
//       console.log('---------complet recipy-----------');
      
//     },
//    })
   }
   
   





   openDialoEditCategory() {
    throw new Error('Method not implemented.');
    }
    openDeletDialog() {
    throw new Error('Method not implemented.');
    }
    searchRecipey(){
      this.getRecipes();
    

}
}