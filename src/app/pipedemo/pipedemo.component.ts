import { Component } from '@angular/core';

@Component({
  selector: 'app-pipedemo',
  templateUrl: './pipedemo.component.html',
  styleUrls: ['./pipedemo.component.css']
})
export class PipedemoComponent {

  name = "Shubham"
  dob = new Date();
  salary = 30000;
  marks = 0.648556644;
  count:number=2300564
  decValue:number=3.85674
  price:number=99.99
  today:Date = new Date()
  fruitsArr:string[]=['Apple','Orange','Grapes','Papaya','Kiwi']
  myObj = {id:1, designation:'Software Engineer'}

  employees = [
    {id:1, name:'Rahul', age:22, gender:'Male'},
    {id:2, name:'Manish', age:23, gender:'Male'},
    {id:3, name:'Vishal', age:24, gender:'Male'},
    {id:4, name:'Himanshu', age:25, gender:'Male'},
    {id:5, name:'Deepansh', age:26, gender:'Male'},
    {id:6, name:'Bhavna', age:27, gender:'Male'},
    {id:7, name:'Divya', age:28, gender:'Female'},
    {id:8, name:'Nikita', age:29, gender:'Female'},
    {id:9, name:'Chandan', age:30, gender:'Male'}
  ]
}
