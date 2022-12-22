import { NgFor } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormserviceService } from '../formservice.service';

@Component({
  selector: 'app-loagin',
  templateUrl: './loagin.component.html',
  styleUrls: ['./loagin.component.scss']
})
export class LoaginComponent implements OnInit {

  /* ====================================================================================
            HttpClient get(), post(), put() and delete() metod with json server
  ==================================================================================== */

  // ====== to change submit and update button
  isEdit = false;

  // ===== to display json server value in view
  usesrsdata: any;
  usersreset = new usersdetails();
  usersobj = {
    id: '',
    fullname: '',
    mobilenumber: '',
    emailaddress: '',
    password: '',
  }


  // ==== assign formservice in service variable
  constructor(private service: FormserviceService) { }

  // call get users for json server function
  ngOnInit(): void {
    this.getusersdata();
  }


  // ======== to submit form and generate new user data and get json server value
  funconsole(jsonform: NgForm) {
    console.warn("click submit button");
    console.warn(jsonform);
    this.service.createusers(jsonform).subscribe((responce) => {
      alert("user added successfully!");
      this.getusersdata();
    });
  }

  // ======= get users data form json server
  getusersdata() {
    this.service.getallusers().subscribe((responce) => {
      this.usesrsdata = responce;
    })
  }

  // ====== edit users data form json serve
  editusersdata(users: any) {
    this.usersobj = users;
    this.isEdit = true;
  }

  // ====== delete users data from json server
  deleteusersdata(users: any) {
    this.service.deletusers(users).subscribe(() => {
      alert("delete user successfully!");
      this.getusersdata();
    })
  }

  // ====== update users data from json server
  updateuserdata() {
    this.isEdit = !this.isEdit;
    this.service.updateusers(this.usersobj).subscribe(() => {
      this.getusersdata();
    })
  }

}

export class usersdetails {
  fullname = '';
  mobilenumber = '';
  emailaddress = '';
  password = '';
}