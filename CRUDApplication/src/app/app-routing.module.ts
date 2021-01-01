import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { DisplaystudentComponent } from './displaystudent/displaystudent.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  
  { path: '', redirectTo: 'next', pathMatch: 'full' },
  { path: 'next', component: HomeComponent },
  
  { path: '', redirectTo: 'loginuser', pathMatch: 'full' },
  {path:'loginuser',component:LoginComponent},

  //{path:'',redirectTo:'loginuser',pathMatch:'full'},
  //{path:'loginuser/:email',component:HomeComponent},

  
  { path: 'addnew', component: AddstudentComponent },
  { path: 'displayData',component:DisplaystudentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
