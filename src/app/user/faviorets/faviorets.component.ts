import { Component, OnInit } from '@angular/core';
import { UsersService } from '../service/users.service';
import { ItebleRecipey } from 'src/app/admin/Module/irecipey';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-faviorets',
  templateUrl: './faviorets.component.html',
  styleUrls: ['./faviorets.component.scss']
})
export class FavioretsComponent implements OnInit  {
  tableRecpey: any[]=[];
  pathImag:string='https://upskilling-egypt.com:443/'
  dummyImg:string='../../../assets/image/recipy-images.jpeg'
 
constructor(
private usersServ:UsersService,
private toastr: ToastrService


){

}
ngOnInit(){
  this.getMyFav();
}

getMyFav(){
  this.usersServ.onGetFavRecpey().subscribe({
    next:(res)=>{
      this.tableRecpey=res.data;
console.log(this.tableRecpey);

    },

    error:(err)=>{
      console.log(err);
      
    },
    complete:()=> {
      console.log('---complet get Fav item----');
      
    },
  })
}



removeItem(id:number){
this.usersServ.onDeletFromFav(id).subscribe({
  next:(res) =>{
    console.log(res);
    
  },
  error:(err)=>{
console.log(err);
this.toastr.error('can not remove from fav Recipey' ,'error');

  },
  complete:()=>{
    console.log('---compet delet fav--------');
    this.toastr.success('remove from fav Recipey' ,'successfuly');
    this.getMyFav();
  }
})
}




}
