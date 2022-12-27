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
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SessionManagementComponent } from './session-management/session-management.component';
import { Sesionmanagement2Component } from './sesionmanagement2/sesionmanagement2.component';
import { AuxiliaryRoutesComponent } from './auxiliary-routes/auxiliary-routes.component';
import { AuxiliaryRouters2Component } from './auxiliary-routers2/auxiliary-routers2.component';
import { AuxiliaryRoutingService } from './auxiliary-routing.service';
import { FakeCompoComponent } from './fake-compo/fake-compo.component';
import { NgTemplateComponent } from './ng-template/ng-template.component';
import { NgContainerComponent } from './ng-container/ng-container.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    LoaginComponent,
    SessionManagementComponent,
    Sesionmanagement2Component,
    AuxiliaryRoutesComponent,
    AuxiliaryRouters2Component,
    FakeCompoComponent,
    NgTemplateComponent,
    NgContainerComponent,
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
    NoopAnimationsModule,
    NgbModule
  ],
  providers: [FormserviceService,AuxiliaryRoutingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
