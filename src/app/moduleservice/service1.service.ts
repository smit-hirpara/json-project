import { HttpClient } from '@angular/common/http';
import { identifierName } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class Service1Service {

  constructor(private http:HttpClient) { }

  postStudents(data:any) {
    return this.http.post<any>("http://localhost:3004/students", data).pipe(map((response:any)=>{
      return response;
    }));
  }
  getStudents() {
    return this.http.get<any>("http://localhost:3004/students").pipe(map((response:any)=>{
      return response;
    }));
  }
  updateStudent(data:any, id:number) {
    return this.http.put<any>("http://localhost:3004/students/"+id, data).pipe(map((response:any)=>{
      return response;
    }));
  }
  deletStudent(id:number) {
    return this.http.delete<any>("http://localhost:3004/students/"+id).pipe(map((response:any)=>{
      return response;
    }))
  }
}
