import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login-register-mod/login/login.component';
import { UserGuradGuard } from './user-gurad.guard';



const routes: Routes = [{ path: 'header', loadChildren: () => import('./header/header.module').then(m => m.HeaderModule) },
 { path: 'login-register-mod', loadChildren: () => import('./login-register-mod/login-register-mod.module').then(m => m.LoginRegisterModModule) }, 
 { path: 'tweet-mod', loadChildren: () => import('./tweet-mod/tweet-mod.module').then(m => m.TweetModModule), canActivate: [UserGuradGuard] },
 { path: 'user-mod', loadChildren: () => import('./user-mod/user-mod.module').then(m => m.UserModModule), canActivate: [UserGuradGuard] },
 { path: '', component: HomepageComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
