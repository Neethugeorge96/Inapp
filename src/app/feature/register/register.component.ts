import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  RegistrationForm !: FormGroup;
  submitted: boolean = false;
  isExisting:boolean = false;
  userList : any =[];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private toaster :ToastrService,
  ) { }

  ngOnInit(): void {
    this.RegistrationForm = this.createFormGroup();
    this.userList = localStorage.getItem('userData')? localStorage.getItem('userData'):[];
    this.userList = JSON.parse(this.userList)


  }


  createFormGroup(loginData?: any): FormGroup {
    return this.formBuilder.group({
      username: [
        loginData ? loginData.username : "",
        [
          Validators.required,
          Validators.pattern('^[a-zA-Z_.-]*$')

        ],
      ],

      email: [
        loginData ? loginData.email : "",
        [
          Validators.required,
          Validators.email
        ],
      ],


      password: [
        loginData ? loginData.password : "",
        [Validators.required, Validators.maxLength(20),Validators.pattern('^[a-zA-Z0-9_.-]*$')]
      ],

    });
  }
  checkexisting(){

    for (var i = 0; i < this.userList.length; i++) {
      if (this.userList[i].email == this.RegistrationForm.controls['email'].value) {
        this.isExisting = true;
        break;
      } else this.isExisting = false;
    }

  }

  registerUser(){
    this.submitted = true;
    if(this.RegistrationForm.valid  ){
      this.userList.push(this.RegistrationForm.value);

   localStorage.setItem('userData',JSON.stringify(this.userList));
   this.toaster.success('User Registered successfully');
    this.router.navigateByUrl('login');
    }
  }





}
