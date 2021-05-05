import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRegisterModRoutingModule } from './login-register-mod-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NewLoginComponent } from './new-login/new-login.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ LoginComponent, RegisterComponent, NewLoginComponent],
  imports: [
    CommonModule,
    LoginRegisterModRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ]
})
export class LoginRegisterModModule { }
