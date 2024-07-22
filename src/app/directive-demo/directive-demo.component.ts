import { Component } from '@angular/core';

@Component({
  selector: 'app-directive-demo',
  templateUrl: './directive-demo.component.html',
  styleUrls: ['./directive-demo.component.css']
})
export class DirectiveDemoComponent {

  myName="Shivani Gupta"
  condition1:boolean;
  myFunc(val: boolean) {
    this.condition1 = val;
  }

  people:any[]=[
    {
      "name":"Shubham",
      "country":"India"
    },
    {
      "name":"John",
      "country":"USA"
    }
]

getColor(country: any): any {
  if(country=="India"){
    return "red";
  }else if(country=="USA"){
    return "blue";
  }
  }
}
