import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable, ReplaySubject, of } from 'rxjs';
import { shareReplay, tap, catchError } from 'rxjs/operators';

import { StateStorageService } from '@services/state-storage.service';
import { Account } from '@models/account.model';
import { SERVER_URL } from '@env/environment';
/**
 * Contiene la definición de la clase AccountService.
 * La clase se utiliza para obtener información sobre la cuenta del usuario.
 * La clase también se utiliza para manejar la autenticación del usuario en la aplicación.
 * La clase implementa la interfaz HttpInterceptor de Angular y se utiliza para interceptar las solicitudes HTTP y manejar los errores de autenticación.
 * La clase se utiliza para interceptar las solicitudes HTTP y agregar el token de autenticación a las solicitudes.
 * La clase se utiliza para almacenar el estado de la aplicación en el almacenamiento local del navegador.
 * La clase se utiliza para determinar si el usuario está autenticado o no.
 * La clase se utiliza para determinar si el usuario tiene un rol de autoridad específico o no.
 * La clase se utiliza para obtener la identidad del usuario.
 */
@Injectable({ providedIn: 'root' })
export class AccountService {
  /**
   * La propiedad userIdentity se utiliza para almacenar la identidad del usuario.
   */
  private userIdentity: Account | null = null;
  /**
   * La propiedad authenticationState se utiliza para almacenar el estado de autenticación del usuario.
   */
  private authenticationState = new ReplaySubject<Account | null>(1);
  /**
   * La propiedad accountCache$ se utiliza para almacenar la cuenta del usuario.
   * La propiedad es de tipo Observable<Account> y se inicializa en null.
   */
  private accountCache$?: Observable<Account> | null;
  /**
   * La propiedad serverUrl se utiliza para almacenar la URL del servidor.
   */
  private serverUrl = SERVER_URL + 'account';
  /**
   *  El constructor acepta tres parámetros: http, stateStorageService y router.
   *
   * @param http El parámetro http es de tipo HttpClient y se utiliza para realizar solicitudes HTTP.
   * @param stateStorageService El parámetro stateStorageService es de tipo StateStorageService y se utiliza para almacenar el estado de la aplicación en el almacenamiento local del navegador.
   * @param router El parámetro router es de tipo Router y se utiliza para manejar el enrutamiento en la aplicación.
   */
  constructor(
    private http: HttpClient,
    private stateStorageService: StateStorageService,
    private router: Router
  ) {}

  authenticate(identity: Account | null): void {
    this.userIdentity = identity;
    this.authenticationState.next(this.userIdentity);
    if (!identity) {
      this.accountCache$ = null;
    }
  }

  identity(force?: boolean): Observable<Account | null> {
    if (!this.accountCache$ || force) {
      this.accountCache$ = this.fetch().pipe(
        tap((account: Account) => {
          this.authenticate(account);

          this.navigateToStoredUrl();
        }),
        shareReplay()
      );
    }
    return this.accountCache$.pipe(catchError(() => of(null)));
  }

  /**
   * El método se utiliza para comprobar si el usuario está autenticado.
   * @returns El método devuelve un observable que se utiliza para realizar la solicitud HTTP al servidor.
   */
  isAuthenticated(): boolean {
    return this.userIdentity !== null;
  }

  /**
   *  El método se utiliza para obtener el estado de autenticación actual del usuario.
   * @returns  El método devuelve un observable que se utiliza para obtener el estado de autenticación actual del usuario.
   */
  getAuthenticationState(): Observable<Account | null> {
    return this.authenticationState.asObservable();
  }

  /**
   * El método se utiliza para obtener la información de la cuenta del usuario desde el servidor.
   * @returns El método devuelve un observable que se utiliza para realizar la solicitud HTTP al servidor.
   */
  private fetch(): Observable<Account> {
    return this.http.get<Account>(this.serverUrl);
  }

  /**
   * El método se utiliza para redirigir al usuario a la URL almacenada en el servicio StateStorageService utilizando el servicio Router.
   * Si la URL existe, se borra la URL almacenada utilizando el servicio StateStorageService
   */
  private navigateToStoredUrl(): void {
    // previousState can be set in the authExpiredInterceptor and in the userRouteAccessService
    // if login is successful, go to stored previousState and clear previousState
    const previousUrl = this.stateStorageService.getUrl();
    if (previousUrl) {
      this.stateStorageService.clearUrl();
      this.router.navigateByUrl(previousUrl);
    }
  }
}

