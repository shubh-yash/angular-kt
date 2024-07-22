import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { Assignment2Component } from './assignment2/assignment2.component';
import { Assignment3Component } from './assignment3/assignment3.component';
import { Assignment4Component } from './assignment4/assignment4.component';
import { InputFormExampleComponent } from './input-form-example/input-form-example.component';
import { MenuComponent } from './menu/menu.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { FilePreviewComponent } from './file-preview/file-preview.component';
import { DirectiveDemoComponent } from './directive-demo/directive-demo.component';
import { PipedemoComponent } from './pipedemo/pipedemo.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactComponent } from './contact/contact.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { AuthGuard } from './auth.guard';
import { ChildComponent } from './parent-child/child/child.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'pipes',
    pathMatch:'full'
  },
  {
    path:'assignment-1',
    component: SuccessAlertComponent
  },
  {
    path:'assignment-2',
    component: Assignment2Component
  },
  {
    path:'assignment-3',
    component: Assignment3Component
  },
  {
    path:'assignment-4',
    component: Assignment4Component
  },
  {
    path:'assignment-5/q1',
    component: InputFormExampleComponent
  },
  {
    path:'assignment-5/q2',
    component: MenuComponent
  },
  {
    path:'assignment-5/q2/login',
    component: LoginComponent
  },
  {
    path:'assignment-5/q2/register',
    component: InputFormExampleComponent
  },
  {
    path:'file-preview',
    component: FilePreviewComponent
  },
  {
    path:'directive-demo',
    component: DirectiveDemoComponent
  },
  {
    path:'pipes',
    component: PipedemoComponent
  },
  {
    path:'dashboard',
    component: DashboardComponent
  },
  {
    path:'contact',
    component: ContactComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'about-us',
    component: AboutusComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'login-page',
    component: LoginpageComponent
  },
  {
    path:'parent-child',
    component: ChildComponent
  },
  {
    path:'**',
    component: PageNotFoundComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
