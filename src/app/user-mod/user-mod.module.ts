import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserModRoutingModule } from './user-mod-routing.module';
import { UserModComponent } from './user-mod.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [UserModComponent],
  imports: [
    CommonModule,
    UserModRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UserModModule { 
  
}
