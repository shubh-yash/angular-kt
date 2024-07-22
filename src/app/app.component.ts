import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { EmpDataService } from './services/emp-data.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  myData: string = 'My name is Shubham';

  public employees = [
    { name: 'Nakul', gender: 'Male', age: 25 },
    { name: 'Dipika', gender: 'Female', age: 26 },
    { name: 'Ayushi', gender: 'Female', age: 27 },
  ];
  cdata: any;

  dataFromChild:string;

  getChildData(val) {
    this.cdata = val;
  }

  constructor() {
    localStorage.setItem('isLoggedin', 'false');
  }

  showChildData(data) {
    this.dataFromChild = data
  }
}
