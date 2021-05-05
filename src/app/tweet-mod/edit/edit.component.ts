import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Tweet } from 'src/app/model/tweet';
import { User } from 'src/app/model/user';
import { TweetService } from 'src/app/service/tweet.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  editForm : FormGroup;
  userId:string;
  user: User;
  tweet:Tweet;
  tweetselected:Tweet;
  id:string;
  ngOnInit(): void {
    
  }
  isValidInput(fieldName): boolean {
    return this.editForm.controls[fieldName].invalid &&
      (this.editForm.controls[fieldName].dirty || this.editForm.controls[fieldName].touched);
  }
  constructor (private formBuilder: FormBuilder,private router : Router,private tweetService:TweetService) {
    console.log("in edit")
    this.tweetselected= this.router.getCurrentNavigation().extras.state.tweetedit;
    this.user= this.router.getCurrentNavigation().extras.state.user;
    console.log(this.tweetselected);
    console.log(this.tweetselected.message);  
    this.editForm = this.formBuilder.group({
     message : new FormControl('', [Validators.required])
    } );
 }
 logIna(){
   this.id=this.tweetselected.id;
   this.userId=this.tweetselected.userid;
  console.log(this.editForm.getRawValue());
  this.tweetService
  .onEdit(this.editForm.getRawValue(),this.userId,this.id).subscribe((response: Tweet) => {
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


