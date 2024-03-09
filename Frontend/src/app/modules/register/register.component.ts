import { Component, ViewChild, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import {FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LoginService } from '@services/login.service';
import { AccountService } from '@services/account.service';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class registerComponent implements OnInit{

  @ViewChild('username', { static: false })
  username!: ElementRef;

  authenticationError = false;
  accountExist = false;
  boton = false;
  loading = false;

  hide = true
  hidden: boolean = false;
  
  registerForm = new FormGroup({
    nombre: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    apellido: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    email: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    password: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    rpassword: new FormControl('', { nonNullable: true, validators: [Validators.required] })
  });


  constructor(
    private accountService: AccountService,
    private loginService: LoginService,
    public dialog: MatDialog,
    private router: Router) {}


  ngOnInit(): void {
    this.loading = false;
    this.boton = false;
  }

  register(): void{
    if(this.registerForm.value.password==this.registerForm.value.rpassword){
      this.loginService.register(this.registerForm.getRawValue()).subscribe({
        next: () => {
          this.authenticationError = false;
          this.router.navigate(['login']);
        },
        error: (err: HttpErrorResponse) => {
          if (err.status == 401) {
          this.accountExist = true
          this.loading = false
          }
          else {
          console.error("Error con el servidor del Backend")
          
          }
        }
      });
    }
    else{
      console.log(this.registerForm.value);
      this.authenticationError = true
    }
    console.log(this.registerForm.value);
  }

}
