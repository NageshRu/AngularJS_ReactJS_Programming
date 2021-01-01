import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  //external template file
  templateUrl: './app.component.html',

  //Directly within component
  //template:'<h1>Nagesh Rupnar</h1>',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'routing-app';

  constructor(private router:Router){}

  firstPage(){
    console.log('fdjs');
    this.router.navigate(['/','first']);
    
  }

  secondPage(){
    console.log('Hiii');
    this.router.navigate(['/second']);
  }

  
}

