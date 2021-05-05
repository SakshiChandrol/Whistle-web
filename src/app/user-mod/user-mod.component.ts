import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Tweet } from '../model/tweet';
import { User } from '../model/user';
import { TweetService } from '../service/tweet.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-user-mod',
  templateUrl: './user-mod.component.html',
  styleUrls: ['./user-mod.component.css']
})
export class UserModComponent implements OnInit {
loginForm:FormGroup;
isselected:boolean=false;
user:User;
allUser:User[]=[];
tweets:Tweet[]=[];
defauls:any;
  constructor (private formBuilder: FormBuilder,private router : Router,private tweetService:TweetService,private userservice:UserService) {
    this.loginForm = this.formBuilder.group({
     keyword : new FormControl('', [Validators.required])
    } );
 }
 isValidInput(fieldName): boolean {
  return this.loginForm.controls[fieldName].invalid &&
    (this.loginForm.controls[fieldName].dirty || this.loginForm.controls[fieldName].touched);
}

  ngOnInit(): void {
  }
  findUser(){
    this.allUser=[];
this.tweets=[];
    this.isselected=true;
    let value:string=this.loginForm.controls['keyword'].value;
     console.log(value);
    this.userservice.findUser(value).subscribe(
      (response : User) => {
        this.user=response;
        console.log(this.user);
        if(!this.user){
          alert("data not found");
        }
      },
      error => {alert("data not found");
      });
  }
  findTweet(){
    this.allUser=[];
    this.tweets=[];
    this.isselected=false;
    console.log(this.loginForm.getRawValue());
    let value:string=this.loginForm.controls['keyword'].value;
     console.log(value);

    this.tweetService.getAllTweets(value).subscribe(
      (response:Tweet[]) => {
        this.tweets=response;
        console.log(this.tweets);
        if(this.tweets.length==0){
          alert("data not found");
        }
      },
      error => {alert("data not found");
      });
  }
  findAllUser(){
    this.allUser=[];
    this.tweets=[];
    this.isselected=false;
    this.userservice.allUser( ).subscribe(
      (response:User[]) => {
        this.allUser=response;
        console.log(this.allUser);
        if(!this.allUser){
          alert("data not found");
        }
      },
      error => {alert("data not found");
      });
  }
}
