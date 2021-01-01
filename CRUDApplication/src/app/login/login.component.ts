import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,AfterViewInit {

  allStudent:object;
  constructor(private commonService:CommonService,private router:Router) { }
  

  loginObj={
    id:'',
    email:'',
    password:''
  }

  @ViewChild('emailRef') nameElementRef:ElementRef;
  ngAfterViewInit(){
    this.nameElementRef.nativeElement.focus();
  }

  ngOnInit(): void {
  }


  loginForm=new FormGroup({
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.minLength(4)])
 })


 get email(){
  return this.loginForm.get('email');
}

get password(){
  return this.loginForm.get('password');
}


authentication(myObj){
  this.commonService.getAllStudent().subscribe((response)=>{
      this.allStudent=response;
      for(let i in response){
        console.log(this.loginObj.email); 
        if(response[i].email==this.loginObj.email){
          alert("Login Successful");
          this.router.navigate(['/displayData']);
          break; 
        } 
        else{
          alert("Credentials are invalid");
          break;
        }
      }
    })
  }
}
