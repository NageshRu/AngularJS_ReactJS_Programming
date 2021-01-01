import { Component } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import  {jsPDF} from 'jspdf';
import Html2Canvas from 'html2canvas';
import { catchError, finalize } from 'rxjs/operators';

@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.css']
})
export class NewuserComponent{
  storage: any;
  uploadPercent: any;
  downloadURL: any;
  url: any;

  constructor() { }

  ReadMore:boolean=true;
  visible:boolean=false;
  term:boolean=true;

  adduser=new FormGroup({
    firstname:new FormControl('',Validators.required),
    dob:new FormControl('',Validators.required),
    homeApart:new FormControl('',Validators.required),
    city:new FormControl('',Validators.required),
    nearmark:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required),
    confirmPassword:new FormControl('',Validators.required)
  })

  get firstname(){
    return this.adduser.get('firstname');
  }

  get dob(){
    return this.adduser.get('dob');
  }

  get homeApart(){
    return this.adduser.get('homeApart');
  }

  get city(){
    return this.adduser.get('city');
  }

  get nearmark(){
    return this.adduser.get('nearmark');
  }

  get password(){
    return this.adduser.get('password');
  }

  get confirmPassword(){
    return this.adduser.get('confirmPassword');
  }

  /*onPrint(printSectionId:string){
    let popupWindow;
    let innerContent=document.getElementById(printSectionId).innerHTML;
    popupWindow=window.open('','_blank','width=600,height=700,scrollbars=no,menubar=no,toolbar=no,location=no,status=no,titlebar=no');
    popupWindow.document.open();
    popupWindow.document.write('<html><head><link rel="stylesheet" type="text/css" href="style.css" /></head><body onload="window.print()">' + innerContent + '</html>');
    popupWindow.document.close();
  }*/

  downloadData(){
    var getImage;
    var data=document.getElementById("print-section");  
    Html2Canvas(document.body).then((canvas)=>{
      console.log("In download part");
        var imgWidth=700;
        var pageHeight=1400;
        var imgHeight=canvas.height*imgHeight/canvas.width;
        var heightLeft=imgHeight;

        const contentDataUrl=canvas.toDataURL('image/png');
        console.log("Content URL is",contentDataUrl);
        let pdf=new jsPDF('l','mm','A4');
        console.log("Pdf created",pdf);
        var pos=0;
        pdf.addImage(contentDataUrl,'PNG',0,pos,imgWidth,imgHeight);
        console.log(pdf);
        const file=pdf.output("blob");
        console.log("File Output is",file);
        const filePath=Date.now().toString();
        console.log("File Path is",filePath);
        const fileRef = this.storage.ref('/test/' + filePath+'.samplepdf');
        const task = this.storage.upload('/test/' + filePath+'sample.pdf', file);
        this.uploadPercent = task.percentageChanges();
          task.snapshotChanges().pipe(finalize(() => {
          this.downloadURL = fileRef.getDownloadURL();
          this.downloadURL.subscribe(url => this.url = url
          )
          }))
          .subscribe();
          });  
    }  
        //pdf.save('Sample.pdf');
    
  clickTerm(){
    console.log("In term");
    this.visible=!this.visible;
  }

  /*printData(){
    var restorePage=document.body.innerHTML;
    var printContent=document.getElementById("print-content").innerHTML=restorePage;
    document.body.innerHTML=printContent;
    window.print();
    document.body.innerHTML=restorePage;
  }*/
}
