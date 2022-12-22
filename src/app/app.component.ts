import { formatCurrency } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, NgForm} from "@angular/forms"
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FormserviceService } from './formservice.service';
import { HomeComponent } from './home/home.component';
import { Service1Service } from './moduleservice/service1.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'json-project';

  constructor() {}
  // ngOnInit(): void {
  // this.submit(jsonform);
  // }


  /* ==========================================
          dynamic component loader
  ========================================== */
  components:any;

  ngOnInit() {
    this.components = HomeComponent;
  }
  
  // class function in link using click event
  homecompo() {
    this.components = HomeComponent;
  }

  // class function in link using click event
  aboutcompo() {
    this.components = AboutComponent;
  }
  
  // class function in link using click event
  contactcompo() {
    this.components = ContactComponent;
  }
}
