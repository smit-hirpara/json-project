import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-container',
  templateUrl: './ng-container.component.html',
  styleUrls: ['./ng-container.component.scss']
})
export class NgContainerComponent implements OnInit {

  constructor() { }
  users = [
    {name:'smit',class:'11th',age:17},
    {name:'shivam',class:'9th',age:14},
    {name:'utsav',class:'1th',age:5},
    {name:'meet',class:'10th',age:17},
  ]


  // =======================================  multiple structural directive with div tag ======================================
  display = true;

  // =================================== multiple structural directive with multiple ng-container =================================================
  display2 = true
  changedisplay2() {
    this.display2 = false;
  }
  setdisplay2() {
    this.display2 = true;
  }

  // ================================== multiple structural directive with unorder list and ng-container ===========================================
  display3 = true;

  // =============================== ng-container and ng-template =============================================
  usersobj = {
    user1:'utsav',
    user2:'meet',
    user3:'virang'
  }
  ngOnInit(): void {
  }

}
