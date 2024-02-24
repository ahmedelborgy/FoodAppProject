import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const _Router=inject(Router);
  // const router = inject(Router);

  if(localStorage.getItem('userToken') !== null){
    // _Router.navigate(['/dashbordes']);
    return true;

  }else{
    _Router.navigate(['/login']);
    // alert('llllllll');
    
    return false;
  }
  
  
  // return true;
};
