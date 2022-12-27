import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/router';
import { Observable } from 'rxjs';
import { auxiliary, AuxiliaryRoutingService } from '../auxiliary-routing.service';
import { usersdetails } from '../loagin/loagin.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auxiliary-routes',
  templateUrl: './auxiliary-routes.component.html',
  styleUrls: ['./auxiliary-routes.component.scss']
})
export class AuxiliaryRoutesComponent implements OnInit {

  usersdetails?:Observable<auxiliary[]>;
  constructor(private userservice: AuxiliaryRoutingService) { }

  ngOnInit(): void {
    this.usersdetails = this.userservice.getusers();
  }
}
