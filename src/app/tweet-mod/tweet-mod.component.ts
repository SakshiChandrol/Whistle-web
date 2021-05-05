import { CompileShallowModuleMetadata } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NavigationExtras } from '@angular/router';
import { Tweet } from '../model/tweet';
import { User } from '../model/user';
import { TweetService } from '../service/tweet.service';

@Component({
  selector: 'app-tweet-mod',
  templateUrl: './tweet-mod.component.html',
  styleUrls: ['./tweet-mod.component.css']
})
export class TweetModComponent implements OnInit {
  loginForm : FormGroup; 
  data:string;
  value:boolean;
  user: User;
  tweet:Tweet;
  editselected:Tweet;
  deleteselected:Tweet;
  liked:Tweet;
  userId:string;
  id:string;
   tweets:Tweet[] =[];
   replytweets:Tweet[]=[];  
  constructor (private formBuilder: FormBuilder,private router : Router,private tweetService:TweetService) {
   console.log("in tweet")
    this.user= this.router.getCurrentNavigation().extras.state.user;
    this.userId=this.user.loginid;
   this.loginForm = this.formBuilder.group({
    message : new FormControl('', [Validators.required])
   } );
}


  ngOnInit(): void {
    this.tweetService.getTweets( ).subscribe(
      (response:Tweet[]) => {
        this.tweets=response;
        console.log(this.tweets);
      });
    
    }
    isValidInput(fieldName): boolean {
      return this.loginForm.controls[fieldName].invalid &&
        (this.loginForm.controls[fieldName].dirty || this.loginForm.controls[fieldName].touched);
    }
  
   
  
  logIna(){
    console.log(this.loginForm.getRawValue());
    this.tweetService
    .onPost(this.loginForm.getRawValue(),this.userId).subscribe((response: Tweet) => {
      this.tweet=response;
      console.log(this.tweet);
      this.loginForm.reset();
      this.ngOnInit();
    }, 
    error => {console.log(error)
    })
  }
  onEditClick(event,i:number){
    console.log(event);
    console.log(i);
    this.editselected=this.tweets[i];
    console.log(this.editselected);
    this.router.navigate(['/edit'],{state : {
      tweetedit: this.editselected,
      user:this.user

    }});
  }
  onReplyClick(event,i:number){
    console.log(event);
    console.log(i);
    this.editselected=this.tweets[i];
    console.log(this.editselected);
    this.router.navigate(['/reply'],{state : {
      tweetedit: this.editselected,
      user:this.user

    }});
  }
  onDeleteClick(event,i:number){
    console.log(event);
    console.log(i);
    this.deleteselected=this.tweets[i];
    console.log(this.deleteselected);
    this.id=this.deleteselected.id;
    this.userId=this.deleteselected.userid;
    this.tweetService
    .onDelete(this.userId,this.id).subscribe(response => {
      console.log("Deleted");
      this.ngOnInit();
    }, 
    error => {console.log(error)
    })
  }
    onLikeClick(event,i:number){
      console.log(event);
      console.log(i);
      this.liked=this.tweets[i];
      console.log(this.liked);
      this.id=this.liked.id;
      this.userId=this.liked.userid;
      this.tweetService
      .onLike(this.liked,this.userId,this.id).subscribe(response => {
        console.log("Liked");
        this.ngOnInit();
      }, 
      error => {console.log(error)
      })
  }
  onViewReply(event,i:number){
    this.data=""
    console.log(event);
    console.log(i);
    this.liked=this.tweets[i];
    console.log(this.liked);
    this.id=this.liked.id;
    this.userId=this.liked.userid;
    this.tweetService
    .onViewReply(this.userId,this.id).subscribe((response:Tweet[]) => {
      this.replytweets=response;
      if(this.replytweets.length==0){
        this.data="No Replies yet";
      }
      console.log(this.data);
      this.ngOnInit();
    }, 
    error => {console.log(error)
    })
}
  }





