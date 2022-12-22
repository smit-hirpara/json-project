import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { usersdetails } from './loagin/loagin.component';

@Injectable({
  providedIn: 'root'
})
export class FormserviceService {
  /* =========================================================================================
              HttpClient get(), post(), put() and delete() metod with json server
  ========================================================================================== */

  // ==== assign HttpClient in http variable
  constructor(private http:HttpClient) { }

  // ==== post users data from json server
  createusers(user: any) {
    return this.http.post("http://localhost:3000/users", user);
  }

  // ==== get users data from json server
  getallusers() {
    return this.http.get("http://localhost:3000/users");
  }

  // ===== update users data from json server
  updateusers(user:any) {
    return this.http.put("http://localhost:3000/users" + "/" + user.id,user);
  }

  // ===== delete users data form json server
  deletusers(users:any) {
    return this.http.delete("http://localhost:3000/users" + "/" +users.id);
  }
}
