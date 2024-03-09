import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StateStorageService } from '@services/state-storage.service';
import { SERVER_URL } from '@env/environment';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    private serverUrl = SERVER_URL;

    constructor(private stateStorageService: StateStorageService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // const serverApiUrl = this.serverUrl;
/*     if (!request.url || (request.url.startsWith('http') && !(serverApiUrl && request.url.startsWith(serverApiUrl)))) {
      return next.handle(request);
    } */

    // const token: string | null = this.stateStorageService.getAuthenticationToken();
/*     if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `${token}`,
        },
      });
    } */
    return next.handle(request);
  }
}
