import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

import { LoginService } from '@services/login.service';
import { StateStorageService } from '@services/state-storage.service';
import { AccountService } from '@services/account.service';

@Injectable()
export class AuthExpiredInterceptor implements HttpInterceptor {
  constructor(
    private loginService: LoginService,
    private router: Router,
    private accountService: AccountService
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      tap({
        error: (err: HttpErrorResponse) => {
          if (err.status === 403 && err.url && err.url.includes('api/account')) {
            if (this.router.url != '/login') {
              this.loginService.logout();
              this.router.navigate(['/login']);
            }
          }
        },
      })
    );
  }
}
