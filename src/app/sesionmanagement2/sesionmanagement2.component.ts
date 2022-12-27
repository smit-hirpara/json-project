import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sesionmanagement2',
  templateUrl: './sesionmanagement2.component.html',
  styleUrls: ['./sesionmanagement2.component.scss']
})
export class Sesionmanagement2Component implements OnInit {

  constructor() { }

  // change local storage localdata value with setItem() and getItem()
  changelocalstorage() {
    localStorage.setItem("localdata","local storage sessionmanagement2");
    console.warn("sessionmanagement2:- change localdata =" + localStorage.getItem("localdata"));
  }

  // change session storage sessiondata value with setItm() and getItem()
  changesessionstorage() {
    sessionStorage.setItem("sessiondata","session storage sessionmanagement2");
    console.warn("sessionmanagement2:- change sessiondata =" + sessionStorage.getItem("sessiondata"));
  }

  // delete local storage localdata value with removeItem() and getItem()
  deletelocalstorage() {
    localStorage.removeItem("localdata");
    console.warn("sessionmanagement2:- localdata = "+localStorage.getItem("localdata"));
  }

  // delete session storage sessiondata value with removeItem() and getItem()
  deletesessionstorage() {
    sessionStorage.removeItem("sessiondata");
    console.warn("sessionmanagement2:- sessiondata = "+sessionStorage.getItem("sessiondata"));
  }

  ngOnInit(): void {
    console.warn("sessionmanagement2 :- localdata = " + localStorage.getItem("localdata"));
    console.warn("sessionmanagement2 :- sessiondata = " + sessionStorage.getItem("sessiondata"));
  }

}
