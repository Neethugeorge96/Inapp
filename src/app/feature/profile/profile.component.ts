import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as _ from 'lodash';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileFrm !: FormGroup;
  submitted: boolean = false;
  loggedData: any;

  userList: any = [];

  constructor(private formBuilder: FormBuilder,
    private Router: Router,
    private toaster: ToastrService,) { }

  ngOnInit(): void {

    this.loggedData = localStorage.getItem('loginData') ? localStorage.getItem('loginData') : {};
    this.loggedData = JSON.parse(this.loggedData)
    console.log("data", this.loggedData);
    this.profileFrm = this.createFormGroup(this.loggedData);

  }



  createFormGroup(loggedData?: any): FormGroup {
    return this.formBuilder.group({
      username: [
        loggedData ? loggedData.username : "",
        [
          Validators.required,

        ],
      ],


      password: [
        loggedData ? loggedData.password : "",
        [Validators.required, Validators.maxLength(20)]
      ],

      email: [{ value: loggedData ? loggedData.email : "", disabled: true }


      ],



    });
  }


  removeaccount() {

    Swal.fire({
      title: 'Are you sure want to Delete Your Account?',
      text: 'You will not be able to recover this Account!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {


        localStorage.removeItem('loginData');
        let getdata: any = localStorage.getItem('userData');
        getdata = JSON.parse(getdata)
        let userIndex = _.findIndex(getdata, ['email', this.profileFrm.controls['email'].value]);
        getdata.splice(userIndex, 1)

        localStorage.removeItem('userData');
        localStorage.setItem('userData', JSON.stringify(getdata))
        this.Router.navigateByUrl('/login')
        Swal.fire(
          'Deleted!',

        )
      } else {

      }
    })



  }

  Update() {
    localStorage.removeItem('loginData');
    let getdata: any = localStorage.getItem('userData');
    getdata = JSON.parse(getdata)
    let userIndex = _.findIndex(getdata, ['email', this.profileFrm.controls['email'].value]);
    getdata.splice(userIndex, 1)
    localStorage.removeItem('userData');

    getdata.push({ username: this.profileFrm.controls['username'].value, email: this.profileFrm.controls['email'].value, password: this.profileFrm.controls['password'].value },)
    localStorage.setItem('userData', JSON.stringify(getdata))
    this.toaster.success("Updated successfully")
    this.Router.navigateByUrl('/login')


  }

}
