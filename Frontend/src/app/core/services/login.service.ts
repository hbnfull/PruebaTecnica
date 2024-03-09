import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

import { Account, regAccount } from '@models/account.model';
import { AccountService } from '@services/account.service';
import { AuthServerProvider } from '@services/auth-jwt.service';
import { Login, Register } from '@models/login.model';
import { SERVER_URL } from '@env/environment';
import { HttpClient } from '@angular/common/http';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { ModalLockedComponent } from '@modules/login/modal-locked/modal-locked.component';

@Injectable({ providedIn: 'root' })
export class LoginService {
  private serverUrl = SERVER_URL + 'login';
  private Url = SERVER_URL + 'register';
  public logged = false;
  public accF = "Entrar";
  constructor(
    private accountService: AccountService, 
    private authServerProvider: AuthServerProvider,
    private http: HttpClient,
    public dialog: MatDialog,
    ) {}

  login(credentials: Login): Observable<any> {
    // return this.authServerProvider.login(credentials).pipe(mergeMap(() => this.accountService.identity(true)));
    return this.http.post(this.serverUrl, credentials)
  }
    
  register(credentials: Register): Observable<Object> {
    return this.http.post(this.Url, credentials)
  }

  logout(): Observable<void> {
    return this.authServerProvider.logout();
  }
  
  sliberate(credentials: Login): Observable<Object> {
    return this.http.post(this.serverUrl, credentials)
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalLockedComponent,{
      width: '360px',
      disableClose: true,
      panelClass: 'custom-dialog' 
    });
  }
}


