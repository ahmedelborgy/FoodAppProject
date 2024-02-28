import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const userGuard: CanActivateFn = (route, state) => {
  const _Router=inject(Router);
  // const router = inject(Router);

  if(localStorage.getItem('userToken') !== null &&
  localStorage.getItem('userGroup')=='SystemUser'){
    // _Router.navigate(['/dashbordes']);
    return true;

  }else{
    _Router.navigate(['/login']);
    // alert('llllllll');
    
    return false;
  }
};
