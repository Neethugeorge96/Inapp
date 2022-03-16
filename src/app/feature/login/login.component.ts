
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userList: any = [];
  Loginform !: FormGroup;
  isRegistered: boolean = false;
  submitted: boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    private toaster: ToastrService,

    private router: Router
  ) { }

  ngOnInit(): void {
    this.Loginform = this.createFormGroup();
    this.userList = localStorage.getItem('userData') ? localStorage.getItem('userData') : [];
    this.userList = JSON.parse(this.userList)
    console.log(this.userList);



  }

  createFormGroup(loginData?: any): FormGroup {
    return this.formBuilder.group({
      email: [
        loginData ? loginData.email : "",
        [
          Validators.required,
          Validators.email
        ],
      ],


      password: [
        loginData ? loginData.password : "",
        [
          Validators.required,
        ],
      ],

    });
  }




  login() {

    this.submitted = true;

    if (this.Loginform.valid) {

      for (var i = 0; i < this.userList.length; i++) {

        if ((this.userList[i].email == this.Loginform.controls['email'].value) && (this.userList[i].password == this.Loginform.controls['password'].value)) {

          this.isRegistered = true;

          break;

        } else this.isRegistered = false;

      }

      if (this.isRegistered) {

        localStorage.setItem('loginData', JSON.stringify(this.Loginform.value))

        this.toaster.success('Login Success');

        this.router.navigateByUrl('home');

      } else this.toaster.error('Invalid Credentials');

    }

  }


}
