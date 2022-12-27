import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-template',
  templateUrl: './ng-template.component.html',
  styleUrls: ['./ng-template.component.scss']
})
export class NgTemplateComponent implements OnInit {

  constructor() { }

  /* ===================================================== 
              ng-template with ngif statement
  ===================================================== */
  display = true;
  a = 10;
  b = "smit";

  /* =====================================================
              ng-template with ngfor statement
  ===================================================== */
  users = [
    {name:'utsav',class:'5th',age:5},
    {name:'virang',class:'10th',age:17},
    {name:'meet',class:'10th',age:18},
    {name:'om',class:'12th',age:23}
  ];

  input = prompt("enter langulge");
  inputlength = this.input?.length;

  ngOnInit(): void {
  }

}
