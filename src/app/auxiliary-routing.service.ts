import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { of } from 'rxjs';
// import 'rxjs/add/observable/of';


const users:auxiliary[] = [
  {"id":1,"name":'smit','state':'indial'},
  {"id":2,"name":'shivam','state':'UK'},
  {"id":3,"name":'utsav','state':'canada'},
];

let userdata = of(users);
@Injectable({
  providedIn: 'root'
})
export class AuxiliaryRoutingService {
  getusers():Observable<auxiliary[]> {
    return userdata;
  }
  constructor() { }
}

export class auxiliary {
  id?:number;
  name?:string;
  state?:string;
}