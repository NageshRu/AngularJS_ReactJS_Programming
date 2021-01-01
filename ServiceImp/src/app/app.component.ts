import { Input } from '@angular/core';
import { Component, SimpleChange } from '@angular/core';
import { Cars } from './cars';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'ServiceImp';
  num: number= 0;

  //items:item[]=[{name:'One',val:1},{name:'Two',val:2},{name:'Three',val:3}];
  //selectedValue: string= 'One'; 

  cars: Cars[] = [
    {
      "name": "MG Hector",
      "color": 'blue'
    },
    {
      "name": "Ford",
      "color": 'olive'
    },
    {
      "name": "Kia",
      "color": 'orange'
    },
    {
      "name": "BMW",
      "color": 'red'
    },
    {
      "name": "Jaguar",
      "color": 'green'
    },
    {
      "name": "Suzuki",
      "color": 'purple'
    }
  ];
}
