import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { InputFormExampleComponent } from './input-form-example/input-form-example.component';
import { MatRadioModule } from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { MenuComponent } from './menu/menu.component';
import { MatMenuModule } from '@angular/material/menu';
import { Assignment2Component } from './assignment2/assignment2.component';
import { Assignment3Component } from './assignment3/assignment3.component';
import { Assignment4Component } from './assignment4/assignment4.component';
import { DialogExampleComponent } from './menu/dialog-example/dialog-example.component';
import {MatDialogModule} from '@angular/material/dialog';
import { ContactDetailsDialogComponent } from './menu/contact-details-dialog/contact-details-dialog.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NgxDocViewerModule } from 'ngx-doc-viewer';
import { FilePreviewComponent } from './file-preview/file-preview.component';
import { DirectiveDemoComponent } from './directive-demo/directive-demo.component';
import { PipedemoComponent } from './pipedemo/pipedemo.component';
import { GenderPipe } from './pipes/gender.pipe';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactComponent } from './contact/contact.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { FileuploadComponent } from './fileupload/fileupload.component';
import { RightClickDisableDirective } from './right-click-disable.directive';
import { ViewchildComponent } from './viewchild/viewchild.component';
import { MyCustomStyleDirective } from './custom-directive/my-custom-style.directive';
import { ChildComponent } from './parent-child/child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    InputFormExampleComponent,
    MenuComponent,
    Assignment2Component,
    Assignment3Component,
    Assignment4Component,
    DialogExampleComponent,
    ContactDetailsDialogComponent,
    PageNotFoundComponent,
    LoginComponent,
    FilePreviewComponent,
    DirectiveDemoComponent,
    PipedemoComponent,
    GenderPipe,
    DashboardComponent,
    ContactComponent,
    AboutusComponent,
    LoginpageComponent,
    FileuploadComponent,
    RightClickDisableDirective,
    ViewchildComponent,
    MyCustomStyleDirective,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatIconModule,
    MatCardModule,
    MatMenuModule,
    MatDialogModule,
    MatSidenavModule,
    MatToolbarModule,
    NgxDocViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
