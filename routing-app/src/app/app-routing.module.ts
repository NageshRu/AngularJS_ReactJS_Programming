import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'',redirectTo:'next',pathMatch:'full'},
  {path:'next',component:FirstComponent},
  {path:'colors/:id',component:SecondComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
