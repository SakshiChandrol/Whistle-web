import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Tweet } from 'src/app/model/tweet';
import { User } from 'src/app/model/user';
import { TweetService } from 'src/app/service/tweet.service';

@Component({
  selector: 'app-reply',
  templateUrl: './reply.component.html',
  styleUrls: ['./reply.component.css']
})
export class ReplyComponent implements OnInit {
  replyForm : FormGroup;
  value:boolean;
  user: User;
  tweet:Tweet;
  editselected:Tweet;
  userId:string;
  tweetselected:Tweet;
  id:string;
   tweets:Tweet[] =[ ] 
   constructor (private formBuilder: FormBuilder,private router : Router,private tweetService:TweetService) {
    console.log("in tweet")
    this.tweetselected= this.router.getCurrentNavigation().extras.state.tweetedit;
    this.user= this.router.getCurrentNavigation().extras.state.user;
    console.log(this.user);
    console.log(this.user.fname);
     this.userId=this.user.loginid;
    this.replyForm = this.formBuilder.group({
     message : new FormControl('', [Validators.required])
    } );
    this.replyForm.reset();
 }
 isValidInput(fieldName): boolean {
  return this.replyForm.controls[fieldName].invalid &&
    (this.replyForm.controls[fieldName].dirty || this.replyForm.controls[fieldName].touched);
}
  ngOnInit(): void {
  }
  logIna(){
    this.id=this.tweetselected.id;
   this.userId=this.tweetselected.userid;
  console.log(this.replyForm.getRawValue());
  this.tweetService
  .onReply(this.replyForm.getRawValue(),this.userId,this.id).subscribe((response: Tweet) => {
    this.tweet=response;
    console.log(this.tweet);
    this.router.navigate(['/tweet'],{state : {
      tweetedit: this.tweetselected,
      user:this.user
    }});
  }, 
  error => {console.log(error)
  })
  }
}
