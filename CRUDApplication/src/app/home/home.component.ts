import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  opened=false;
  allStudent:object;
  constructor(private commonService:CommonService,private router:Router) { }

  ngOnInit(){  }

  openNav(){
     this.opened=!this.opened;
  }

  newStudent(){
      this.router.navigateByUrl('loginuser');
  }
  
}
