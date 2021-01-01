import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddstudentComponent } from './addstudent/addstudent.component';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http:HttpClient) { }


  createStudent(student){
    return this.http.post("https://5f992ddb50d84900163b835a.mockapi.io/studentdatas",student)
  }

  getAllStudent(){
    return this.http.get("https://5f992ddb50d84900163b835a.mockapi.io/studentdatas");
  }


  updateStudent(stu){
    return this.http.put("https://5f992ddb50d84900163b835a.mockapi.io/studentdatas/" +stu.id,stu);
  }

  deleteStudent(student){
    return this.http.delete("https://5f992ddb50d84900163b835a.mockapi.io/studentdatas/"+student.id);
  }

  getStudent(student){
    return this.http.get("https://5f992ddb50d84900163b835a.mockapi.io/studentdatas/"+student.email,student.password);
  }
}
