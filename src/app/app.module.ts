import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormserviceService } from './formservice.service';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { MatProgressBar, MatProgressBarModule } from '@angular/material/progress-bar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { LoaginComponent } from './loagin/loagin.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    LoaginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressBarModule,
    MatButtonModule,
    MatFormFieldModule,
    LoadingBarRouterModule,
    NoopAnimationsModule
  ],
  providers: [FormserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
