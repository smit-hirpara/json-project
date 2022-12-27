import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { auxiliary, AuxiliaryRoutingService } from '../auxiliary-routing.service';

@Component({
  selector: 'app-fake-compo',
  templateUrl: './fake-compo.component.html',
  styleUrls: ['./fake-compo.component.scss']
})
export class FakeCompoComponent implements OnInit {

  usersdetails?:Observable<auxiliary[]>;
  constructor(private userservice: AuxiliaryRoutingService,private router: Router) { }

  ngOnInit(): void {
    this.usersdetails = this.userservice.getusers();
  }
  closeusers() {
    this.router.navigate([{outlets:{userlist:null}}])
  }

}
