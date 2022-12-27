import { coerceStringArray } from '@angular/cdk/coercion';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-session-management',
  templateUrl: './session-management.component.html',
  styleUrls: ['./session-management.component.scss']
})
export class SessionManagementComponent implements OnInit {

  constructor() { }
  // == local variable
  local: string = "local";

  // === session variable
  session: string = "session";

  // === array of object
  userarrayofobj: any = [
    { firstName: 'shivam', lastName: 'hirpara', age: 13 },
    { firstName: 'meet', lastName: 'rathod', age: 17 },
    { firstName: 'utsav', lastName: 'hirpara', age: 6 },
  ];

  // === object
  userobj: any = {
    'firstName': "om",
    "lastName": 'rathod',
    "age": 25,
  }

  // convort number value in string
  localuserage = JSON.stringify(this.userobj.age);

  // convort number value in string
  jsonobj = JSON.stringify(this.userarrayofobj[1].age);


  // == change local variable value with setItem() and getItem()
  changelocalstorage() {
    this.local = "Local Storage";
    localStorage.setItem('localdata', this.local);
    console.clear();
    console.warn("local = " + localStorage.getItem("localdata"));
  }

  // == change session variable value with setItem() and getItem()
  changesessionstorage() {
    this.session = "Session Storage";
    sessionStorage.setItem('sessiondata', this.session);
    console.clear();
    console.warn("session = " + sessionStorage.getItem("sessiondata"));
  }

  // == delete local variable value with removeItem() and getItem()
  deletelocalstorage() {
    localStorage.removeItem("localdata");
    console.clear();
    console.warn("local sotrage localdata = " + localStorage.getItem("localdata"));
  }

  // == delete session variable value with removeItem() and getItem()
  deletesessionstorage() {
    sessionStorage.removeItem("sessiondata");
    console.clear();
    console.warn("session storage sesiondata = " + sessionStorage.getItem("sessiondata"));
  }

  // == delete local storage all value with clear() and getItem()
  deletealllocalstorage() {
    localStorage.clear();
    console.clear();
    console.warn("localstorage localdata = " + localStorage.getItem("localdata"));
    console.warn("local obj first name = " + localStorage.getItem('localuserfname'));
    console.warn("local obj last name = " + localStorage.getItem("localuserlname"));
    console.warn("local obj age = " + localStorage.getItem("localuserage"));
  }

  // == delete session storage all value with clear() and getItem()
  deleteallsessionstorage() {
    sessionStorage.clear();
    console.clear();
    console.warn("sessionstorage sessiondata = "+sessionStorage.getItem("sessiondata"));
    console.warn("sessionstorage fitst name = "+sessionStorage.getItem("sessionuserfname1"));
    console.warn("sessionstorage last name = "+sessionStorage.getItem("sessionuserlname1"));
    console.warn("sessionstorage age = "+sessionStorage.getItem("sessionuserage"));
  }

  // == chack local storage data
  chacklocalstorage() {
    console.clear();
    // == local storage with if else condition 
    if(localStorage.length > 0) {
      console.warn("local storage data avaliable, (" + localStorage.length + ") data avaliable");
    }
    else {
      console.warn("local storage data not avaliable, (" + localStorage.length + ") data avaliable");
    }
  }

  checklocalstoragesupport() {
    console.clear();
    if(window.localStorage) {
      console.warn('local storage supported');
    }
    else {
      console.warn("local storage not supported");
    }
  }

  ngOnInit(): void {
    /* ==================================================
                      local storage 
    ================================================== */
    // == set local variable value in localdata in local storage with setItem()
    localStorage.setItem('localdata', this.local);
    localStorage.setItem('localuserfname', this.userobj.firstName);
    localStorage.setItem('localuserlname', this.userobj.lastName);
    localStorage.setItem('localuserage', this.localuserage);
    localStorage.setItem('localstorage',JSON.stringify(this.userobj)); // return full object
    // localStorage.clear();  // active this code then click check local data btn


    /* =====================================================
                          session storage
    ===================================================== */
    // == set session variable value in sessiondata in session storage with setItem()
    sessionStorage.setItem('sessiondata', this.session);
    sessionStorage.setItem('sessionuserfname1', this.userarrayofobj[1].firstName);
    sessionStorage.setItem('sessionuserlname1', this.userarrayofobj[1].lastName);
    sessionStorage.setItem('sessionuserage', this.jsonobj);


    /* ====================================================
                console local storage variables
    ===================================================== */
    // == print local storage localdata variable value with getItem()
    console.log("(1):- Local Storage")
    console.warn("local = " + localStorage.getItem("localdata"));
    console.warn("local obj firstName = " + localStorage.getItem('localuserfname'));
    console.warn("local obj lastName = " + localStorage.getItem("localuserlname"));
    console.warn("local obj age = " + localStorage.getItem("localuserage"));
    // console.warn('user age = ' + localStorage.getItem(JSON.stringify('userage1')));  not working
    // this.example = JSON.parse(localStorage.getItem("localstoreage"));  not workig
    // console.warn("local obj first name = "+JSON.parse(localStorage.getItem("localstoreage")));  not working


    /* ==========================================================
                  console session storage variables
    =========================================================== */
    // == print session storage sessiondata variable value with getItem()
    console.log("(2):- Session Storage");
    console.warn("session = " + sessionStorage.getItem("sessiondata"));
    console.warn("user array of obj first name = " + sessionStorage.getItem("sessionuserfname1"));
    console.warn("user array of obj last name = " + sessionStorage.getItem("sessionuserlname1"))
    console.warn("user array of obj age = " + sessionStorage.getItem("sessionuserage"));
  }

}


// export class userobj {
//   firstName?: string;
//   lastName?: string;
//   age?: number;
// }
