import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-new-login',
  templateUrl: './new-login.component.html',
  styleUrls: ['./new-login.component.css']
})
export class NewLoginComponent implements OnInit {
  password:string="";
  cpassword:string="";
  loginForm : FormGroup; 
  value:boolean;
  user: User;
  
  constructor(private formBuilder: FormBuilder,private router: Router, private loginService: LoginService ) {
    this.loginForm = this.formBuilder.group({
      loginid : new FormControl('', [Validators.required]),
      pwd : new FormControl('', [Validators.required]),
      cpwd : new FormControl('', [Validators.required])
     } );
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
    isValidInput(fieldName): boolean {
      return this.loginForm.controls[fieldName].invalid &&
        (this.loginForm.controls[fieldName].dirty || this.loginForm.controls[fieldName].touched);
    }
  ngOnInit(): void {
  }
  logIna(){
    let valuee:string=this.loginForm.controls['loginid'].value;
     console.log(valuee);
     let value:string=this.loginForm.controls['pwd'].value;
     console.log(value);
    this.loginService
    .onForget(valuee,value).subscribe((response: any) => {
      this.user=response;
      console.log(this.value);
      console.log(this.user);
      this.router.navigate(['/login']);
    }, 
    error => {//console.log(error),
    this.value=true;
    console.log(this.value);
    })}

   onhit (){
      if(this.password==(this.cpassword)){
        return true;
      }
      else 
      return false;
    }

  }
