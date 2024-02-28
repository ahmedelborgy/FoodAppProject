import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/authService/auth.service';
interface Menue{
  text:string;
  link:string;
  icone:string;
  isActive:boolean;

}
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
constructor(private auth:AuthService){
// this.isAdmin()
// this.isUser()
}
isAdmin():boolean{
  // console.log(this.auth.role);
  
 return this.auth.role=='SuperAdmin'?true:false;
}

isUser():boolean{
  // console.log(this.auth.role);
  
  return this.auth.role=='SystemUser'?true:false;

}
 menu:Menue[]=[

{text:'Home',
link:'/dashbordes/home',
icone:'<i class="fa-solid fa-house"></i>',
isActive:this.isAdmin() ||this.isUser()
},
{text:'Users',link:'/dashbordes/Users',
icone:'<i class="fa-solid fa-users"></i>',
isActive:this.isAdmin()

},
{text:'Recipes',link:'/dashbordes/Recipes',
icone:'<i class="fa-solid fa-table-list"></i>'
,isActive:this.isAdmin() ||this.isUser()

},


{text:'Categories',link:'/dashbordes/admin/categories',
icone:'<i class="fa-regular fa-calendar-days"></i>',
isActive:this.isAdmin()

},




{text:'Faviorets',link:'/dashbordes/Faviorets',
icone:' <i class="fa-regular fa-heart"></i> ',
isActive:this.isUser()

}





// {text:'Home',link:'home',icone:'',isActive:true},
// {text:'Home',link:'home',icone:'',isActive:true}


]





}
