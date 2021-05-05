import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
import { LoginRegisterModModule } from './login-register-mod/login-register-mod.module';
import { TweetModModule } from './tweet-mod/tweet-mod.module';
import { UserModModule } from './user-mod/user-mod.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginService } from './service/login.service';
import { TweetService } from './service/tweet.service';
import { UserService } from './service/user.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UserGuradGuard } from './user-gurad.guard';
import { RouterstubComponent } from './routerstub/routerstub.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    RouterstubComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HeaderModule,
    LoginRegisterModModule,
    UserModModule,
    TweetModModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [LoginService,
    TweetService,
    UserService,
    UserGuradGuard],
  bootstrap: [AppComponent]
})
export class AppModule { 
  //>ng test --no-watch --code-coverage
}
