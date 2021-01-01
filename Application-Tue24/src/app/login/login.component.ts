import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog,MatDialogConfig } from '@angular/material/dialog';
import { NewuserComponent } from '../newuser/newuser.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  constructor(private router:Router,
              private dialog:MatDialog) { }
  

  loginObj={
    email:'',
    password:''
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

/*authentication(myObj){
    if(this.loginObj.email==='nagesh@gmail.com'&&this.loginObj.password==='nagesh@123'){
      this.router.navigateByUrl('/new');
    }
    else
      alert("Credentials are not valid");
  }*/

  openPopUp(){
      const dialogConfig=new MatDialogConfig();
      dialogConfig.disableClose=true;
      dialogConfig.autoFocus=true;
      dialogConfig.width="60%";
      this.dialog.open(NewuserComponent,dialogConfig);
  }
}
