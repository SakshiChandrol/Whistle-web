import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  loginForm : FormGroup; 
  value:boolean;
  num:number;

  ngOnInit() {
    this.num=Math.floor(1000 + Math.random() * 9000);
    console.log(this.num);
    var id=this.num;
    console.log(id);
    }
  constructor(private formBuilder: FormBuilder,private router: Router, private userService: UserService ) {
    this.loginForm = this.formBuilder.group({
      fname : new FormControl('', [Validators.required]),
      lname : new FormControl('', [Validators.required]),
      email : new FormControl('', [Validators.required]),
      loginid : new FormControl('', [Validators.required]),
      pwd : new FormControl('', [Validators.required]),
      cpwd : new FormControl('', [Validators.required]),
      phone : new FormControl('', [Validators.required])
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
      this.userService
      .onRegister(this.loginForm.getRawValue()).subscribe(data => {
        console.log(this.value);
        this.router.navigate(['/login']);
      }, 
      error => {console.log(error),
      this.value=true;
      console.log(this.value);
      })

}
}
