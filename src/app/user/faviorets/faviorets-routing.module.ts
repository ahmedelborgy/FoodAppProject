import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavioretsComponent } from './faviorets.component';

const routes: Routes = [{ path: '', component: FavioretsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FavioretsRoutingModule { }
