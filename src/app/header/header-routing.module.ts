import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from '../homepage/homepage.component';
import { LoginComponent } from '../login-register-mod/login/login.component';
import { RegisterComponent } from '../login-register-mod/register/register.component';
import { TweetModComponent } from '../tweet-mod/tweet-mod.component';
import { UserGuradGuard } from '../user-gurad.guard';
import { UserModComponent } from '../user-mod/user-mod.component';

const routes: Routes = [{ path: 'login', component: LoginComponent },
{ path: 'register', component: RegisterComponent },
{ path: 'tweet', component: TweetModComponent, canActivate: [UserGuradGuard] },
{ path: 'users', component: UserModComponent ,canActivate: [UserGuradGuard]},
{ path: '', component: HomepageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeaderRoutingModule { }
