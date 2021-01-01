import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { CommonService } from '../common.service';


@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})


export class AddstudentComponent implements OnInit {
  
  

  constructor(private commonService:CommonService) { }
  allStudent:object;
  isEdit=false;
  studentObj={
    id:'',
    Roll_No:'',
    First_Name:'',
    Last_Name:'',
    email:'',
    password:''
  }
  
  
  ngOnInit(){
    this.getAllStudentData();
  }


  studentForm=new FormGroup({
     Roll_No:new FormControl('',Validators.required),
     First_Name:new FormControl('',Validators.required),
     Last_Name:new FormControl('',Validators.required), 
     email:new FormControl('',Validators.required),
     password:new FormControl('',Validators.required)
  })

  get Roll_No(){
    return this.studentForm.get('Roll_No');
  }

  get First_Name(){
    return this.studentForm.get('First_Name');
  }

  get Last_Name(){
    return this.studentForm.get('Last_Name');
  }

  get email(){
    return this.studentForm.get('email');
  }

  get password(){
    return this.studentForm.get('password');
  }



  addStudent(formObj){
        this.commonService.createStudent(formObj).subscribe((response=>{
        console.log(response); 
        this.getAllStudentData();
       }))
   
  }

  getAllStudentData(){
      this.commonService.getAllStudent().subscribe((response)=>{
      this.allStudent=response;
    })
  }

  deleteStudentById(student){
        this.commonService.deleteStudent(student).subscribe(()=>{
        this.getAllStudentData();
      })
  }


  editStudent(student){
    this.isEdit=true;
    this.studentObj=student;
  }


  updateStu(){
    this.isEdit=!this.isEdit;
    this.commonService.updateStudent(this.studentObj).subscribe(()=>{
    this.getAllStudentData();
    })
  }

 

  goBack(){
    window.history.back();
  }

}
