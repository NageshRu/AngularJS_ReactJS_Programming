import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewuserComponent } from './newuser/newuser.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { PcmcsmartsarathiComponent } from './pcmcsmartsarathi/pcmcsmartsarathi.component';
import {NgxPrintModule} from 'ngx-print';
import { MatCardModule } from '@angular/material/card';
import { NgxPrinterModule } from 'ngx-printer';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NewuserComponent,
    PcmcsmartsarathiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    NgxPrintModule,
    MatInputModule,
    MatCardModule,
    NgxPrinterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
