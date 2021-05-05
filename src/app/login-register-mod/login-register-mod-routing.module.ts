import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TweetModComponent } from '../tweet-mod/tweet-mod.component';
import { UserModComponent } from '../user-mod/user-mod.component';
import { LoginComponent } from './login/login.component';
import { NewLoginComponent } from './new-login/new-login.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [ { path: 'tweet', component: TweetModComponent },
{ path: 'login', component: TweetModComponent },
{ path: 'new', component: NewLoginComponent },
{path: 'register', component : RegisterComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRegisterModRoutingModule { }
