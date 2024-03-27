import { MatDialog } from '@angular/material/dialog';
import { Iusers } from './Module/iusers-loged';
import { UsersLoggedService } from './service/users-logged.service';
import { Component, OnInit } from '@angular/core';
import { DeletUserComponent } from './component/delet-user/delet-user.component';

@Component({
  selector: 'app-user-logged',
  templateUrl: './user-logged.component.html',
  styleUrls: ['./user-logged.component.scss']
})
export class UserLoggedComponent implements OnInit {

// deletId:number;
tableHead:Iusers[]=[];
pathImag:string='https://upskilling-egypt.com:443/'

constructor(private userServ:UsersLoggedService,
  public dialog: MatDialog
  
  
  ){

}
  ngOnInit(): void {
   this.getAllUsersLogged()
  }

  getAllUsersLogged(){
let parms={
  pageSize:10,
  pageNumber:1,
  userName:'',
  email:'',
  country:''


}
this.userServ.getAllUsersLogged(parms).subscribe({
  next:(res)=>{
    console.log(res);
    this.tableHead=res.data;
    console.log(this.tableHead);
    
  },
  error:(err)=>{
    console.log(err);
    
  },
  complete:()=>{
    console.log('----complet users logged--------');
    
  }
})

  }




  openDialogDeletUser(enterAnimationDuration: string, exitAnimationDuration:
     string,idUser:number) {
    const dialogRef = this.dialog.open(DeletUserComponent, {
      width: '600px',
      enterAnimationDuration,
      exitAnimationDuration,
    
      data: {id:idUser},
    });
// ahmedd
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed',result);
      // this.animal = result;
    });
  }
    }










