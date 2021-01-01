import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  colors=[
    {"id":1,"name":"Red"},
    {"id":2,"name":"Green"},
    {"id":3,"name":"Blue"}
  ];

  constructor(private router:Router) { }

  ngOnInit(){}

  onSelect(c){
      this.router.navigate(['/colors',c.id]);
  }
}
