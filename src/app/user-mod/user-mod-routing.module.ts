import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserModComponent } from './user-mod.component';

const routes: Routes = [{ path: 'user', component: UserModComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserModRoutingModule { }
