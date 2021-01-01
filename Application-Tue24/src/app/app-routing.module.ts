import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NewuserComponent } from './newuser/newuser.component';
import { PcmcsmartsarathiComponent } from './pcmcsmartsarathi/pcmcsmartsarathi.component';
const routes: Routes = [
  { path: '', redirectTo: 'next', pathMatch: 'full' },
  { path: 'next', component: LoginComponent },
  //{ path: 'new', component: NewuserComponent }
  { path:'main',component:PcmcsmartsarathiComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
