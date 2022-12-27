import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { auxiliary, AuxiliaryRoutingService } from '../auxiliary-routing.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auxiliary-routers2',
  templateUrl: './auxiliary-routers2.component.html',
  styleUrls: ['./auxiliary-routers2.component.scss']
})
export class AuxiliaryRouters2Component implements OnInit {

  usersdetails?:Observable<auxiliary[]>;
  notdetails = [
    {id:0,name:'',state:''}
  ];
  constructor(private userservice: AuxiliaryRoutingService,private router: Router) { }

  ngOnInit(): void {
    this.usersdetails = this.userservice.getusers();
  }
  closeusers() {
    this.router.navigate([{outlets:{userlist:null}}])
  }
}
