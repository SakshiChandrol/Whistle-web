import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Login } from 'src/app/model/login';
import { LoginService } from 'src/app/service/login.service';
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

loginForm : FormGroup; 
value:boolean;
user: User;



  ngOnInit() {
   
  }
  constructor(private formBuilder: FormBuilder,private router: Router, private loginService: LoginService ) {
    this.loginForm = this.formBuilder.group({
      loginid : new FormControl('', [Validators.required]),
      pwd : new FormControl('', [Validators.required])
     } );
    }
    isValidInput(fieldName): boolean {
      return this.loginForm.controls[fieldName].invalid &&
        (this.loginForm.controls[fieldName].dirty || this.loginForm.controls[fieldName].touched);
    }
   
    checkIfMatchingPasswords(pwd: string, cpwd: string) {
      return (group: FormGroup) => {
        let passwordInput = group.controls[pwd],
            passwordConfirmationInput = group.controls[cpwd];
        if (passwordInput.value !== passwordConfirmationInput.value) {
          return passwordConfirmationInput.setErrors({notEquivalent: true})
        }
        else {
            return passwordConfirmationInput.setErrors(null);
        }
      }
    }
  logIna(){
    console.log(this.loginForm.getRawValue());
    this.loginService
    .onLogin(this.loginForm.getRawValue()).subscribe((response: User) => {
      this.user=response;
      console.log(this.value);
      console.log(this.user);
      this.router.navigate(['/tweet'],{state : {
        user: this.user
      }});
    }, 
    error => {//console.log(error),
    this.value=true;
    console.log(this.value);
    })
    
  
  }}
