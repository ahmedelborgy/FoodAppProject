import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {  ActivatedRoute, Router } from '@angular/router';
import { NgxDropzoneChangeEvent } from 'ngx-dropzone';
import { Itable } from 'src/app/admin/Module/icategory';
import { Itges } from 'src/app/admin/Module/itges';
import { HelperServiceService } from 'src/app/admin/service/helper-service.service';
import { RecipyService } from 'src/app/admin/service/recipy.service';
import { IRecpeyId } from '../../Module/irecpey-id';
import { Irecipy } from 'src/app/admin/Module/irecipey';

@Component({
  selector: 'app-add-edit-recipey',
  templateUrl: './add-edit-recipey.component.html',
  styleUrls: ['./add-edit-recipey.component.scss']
})
export class AddEditRecipeyComponent  implements OnInit {
selected: any;
tagValue: any;
files: File[] = [];
imgSrc:any;
tableTages:Itges[]=[];
tableCat:Itable[]=[];
recipeyResoponse:IRecpeyId|any;
RecipeyId:number=this._ActivatedRoute.snapshot.params['id'];
pathImag:string='https://upskilling-egypt.com:443/';
btnSave:string='Save';



constructor( 
  private help:HelperServiceService,
  private recServ:RecipyService,
  private _Router:Router,
  private _ActivatedRoute:ActivatedRoute
 ){

  
 }


onSelect(event:any) {
  console.log(event);
  this.imgSrc=event.addedFiles[0]
  console.log(this.imgSrc);
  
  this.files.push(...event.addedFiles);
}

onRemove(event:any) {
  console.log(event);
  this.files.splice(this.files.indexOf(event), 1);
}




// ----------Reactive Forms------------>

recipesForm= new FormGroup({
  name:new FormControl(null),
  description :new FormControl(null),
  price:new FormControl(null),
  tagId:new FormControl(null),
  recipeImage:new FormControl(null),
  categoriesIds:new FormControl(null)
   

  
})
formData=new FormData()


ngOnInit(){
  this.getTages();
  this.getAllCatogeries();
  if(this.RecipeyId){
    this.onGetRecipeyById(this.RecipeyId);
    this.btnSave='Edit'
  }
  else{
  this.btnSave='Save'
  }
}


// ================getAllTages by using helper Service (locap)

getTages(){
  this.help.getAllTages().subscribe({
next:(res)=>{
console.log(res);
this.tableTages=res;
console.log(this.tableTages);

},
error:(err)=>{
console.log(err);

},
complete:()=>{
  console.log('-------complet get tages-------');
  
}


  })
}

// ==========================
getAllCatogeries(){
  let parem={
name:'',
pageSize:100,
pageNumber:1
  }
  this.help.getAllGategories(parem).subscribe({
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
  
   
onAddEditRecipey(recipesForm:FormGroup){
  console.log(recipesForm.value);
  let obj=Object.entries(this.recipesForm.value);
  // console.log(obj);
  
  let res:any=new Map(obj);
  // console.log(this.imgSrc);
  if(this.imgSrc!=undefined)
  res.set("recipeImage", this.imgSrc);
  // console.log(res);
  
  let myData=new FormData()
  for (const [k,v] of res) {

    myData.append(k,v);
  
  }

if(this.RecipeyId){
  this.btnSave='Edit';

  this.oneditRecpey(myData);
 
}else{



this.btnSave='Save';

this.onAddRecipey(myData)
}



}




// editRecpey
oneditRecpey(myData:FormData){
  console.log(myData);
  let id=this.RecipeyId;
  console.log(id);

  
  this.recServ.editRecipey(myData,id).subscribe({
    next:(respone)=>{
     console.log(respone);
   
    },
    error:(err)=>{
  console.log(err);
  
    },
    complete:()=>{
  console.log('----complet add recipey-------');
  this._Router.navigate(['/dashbordes/admin/recipes']);
    }
  })
}

// addRecpey
onAddRecipey(myData:FormData){
  this.recServ.addRecipey(myData).subscribe({
    next:(respone)=>{
     console.log(respone);
   
    },
    error:(err)=>{
  console.log(err);
  
    },
    complete:()=>{
  console.log('----complet add recipey-------');
  this._Router.navigate(['/dashbordes/admin/recipes']);
    }
  })
}

// get RecipeyById
onGetRecipeyById(id:number){

  this.recServ.getRecipeyById(id).subscribe({
next:(respons)=>{
  console.log(respons);
  this.recipeyResoponse=respons;
  console.log(this.recipeyResoponse);
  
},
error:(err)=>{
console.log(err);

},

complete:()=>{
  console.log('---------complete ------------------');
  console.log(this.pathImag+this.recipeyResoponse.imagePath);
  let imgPathUp:any=this.pathImag+this.recipeyResoponse.pathImag;

  console.log(imgPathUp);
  
  this.recipesForm.patchValue({
   
    name:this.recipeyResoponse?.name,
    description :this.recipeyResoponse.description,
    price:this.recipeyResoponse.price,
    tagId:this.recipeyResoponse.tag.id,
    recipeImage:imgPathUp,
    categoriesIds:this.recipeyResoponse.category[0].id,
  })
}
  })
}




















}
