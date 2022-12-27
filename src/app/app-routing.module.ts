import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AuxiliaryRouters2Component } from './auxiliary-routers2/auxiliary-routers2.component';
import { AuxiliaryRoutesComponent } from './auxiliary-routes/auxiliary-routes.component';
import { ContactComponent } from './contact/contact.component';
import { FakeCompoComponent } from './fake-compo/fake-compo.component';
import { HomeComponent } from './home/home.component';
import { LoaginComponent } from './loagin/loagin.component';
import { NgContainerComponent } from './ng-container/ng-container.component';
import { NgTemplateComponent } from './ng-template/ng-template.component';
import { Sesionmanagement2Component } from './sesionmanagement2/sesionmanagement2.component';
import { SessionManagementComponent } from './session-management/session-management.component';

const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'home' ,component: HomeComponent},
  {path:'about' ,component: AboutComponent},
  {path:'contact',component: ContactComponent},
  {path:'sessionmanagement',component:SessionManagementComponent},
  {path:'sessionmanagement2',component:Sesionmanagement2Component},
  {path:'auxiliaryroutes', component:AuxiliaryRoutesComponent},
  {path:'login',component: LoaginComponent},

  // ============= auxiliary router path ==============
  {path:'auxiliaryroutes2', component:AuxiliaryRouters2Component,outlet:'userlist'},
  {path:'ngtemplate',component:NgTemplateComponent,outlet:'userlist'},
  {path:'ngcontainer', component:NgContainerComponent, outlet:'userlist'},
  {path:'**', component:FakeCompoComponent,outlet:'userlist'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
