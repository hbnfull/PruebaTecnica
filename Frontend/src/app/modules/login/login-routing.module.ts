import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';
import { FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  }
];

@NgModule({
  imports: [
    FormsModule, ReactiveFormsModule, RouterModule,
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
