import { Component, ViewChild, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import {FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LoginService } from '@services/login.service';
import { AccountService } from '@services/account.service';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { ModalLockedComponent } from './modal-locked/modal-locked.component';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  @ViewChild('username', { static: false })

  username!: ElementRef;

  authenticationError = false;
  obSession = false;
  accountLocked = false;
  boton = false;
  loading = false;

  hide = true
  hidden: boolean = false;
  
    loginForm = new FormGroup({
    username: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    password: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
  });

  constructor(
    private accountService: AccountService,
    private loginService: LoginService,
    public dialog: MatDialog,
    private router: Router) {}

  ngOnInit(): void {
    this.loading = false;
    this.boton = false;
/*     this.accountService.identity().subscribe(() => {
      if (this.accountService.isAuthenticated()) {
        this.router.navigate(['dashboard']);
      }
    }); */
  }

  login(): void {
    this.loading = true
    this.loginService.login(this.loginForm.getRawValue()).subscribe({
      next: () => {
        this.authenticationError = false;
        if (!this.router.getCurrentNavigation()) {
          this.loginService.logged=true;
          this.router.navigate(['dashboard']);
        }
      },
      error: (err: HttpErrorResponse) => {
        if (err.status == 401) {
        this.accountLocked = true
        this.loading = false
        }
        else {
        this.authenticationError = true
        this.loading = false
        this.hidden = true
        }
      }
    });
  }

  register(): void{
    this.router.navigate(['register'])
  }

  liberate(): void {
    this.loginService.sliberate(this.loginForm.getRawValue()).subscribe({
      next: () => {
        this.accountLocked = false;
        this.openDialog();
      },
      error: (err: HttpErrorResponse) => {
        console.error("Error " + err.status)
        this.accountLocked = false;
        this.obSession = true;
      }
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalLockedComponent,{
      width: '360px',
      disableClose: true,
      panelClass: 'custom-dialog'
    });
  }
}
