import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { product } from '@models/products.models';

/**
 * La clase es un servicio de Angular que se proporciona en la raíz de la aplicación (providedIn: 'root') y se utiliza para almacenar y recuperar datos del almacenamiento local del navegador.
 */
@Injectable({ providedIn: 'root' })
export class StateStorageService {
  /**
   * La propiedad previousUrlKey se utiliza para almacenar la URL anterior en el almacenamiento de sesión del navegador.
   */
  private previousUrlKey = 'previousUrl';
  /**
   * La propiedad authenticationKey se utiliza para almacenar el token de autenticación del usuario en el almacenamiento local del navegador.
   */
  private authenticationKey = 'authenticationToken';
  public storeList:any;

  constructor(
    private http: HttpClient,
  ) {}

  /**
   * El método storeUrl() se utiliza para almacenar la URL anterior del usuario en el almacenamiento local del navegador
   * El método utiliza el método setItem() del objeto sessionStorage para almacenar la URL anterior del usuario.
   * @param url El parámetro url es de tipo string y representa la URL anterior del usuario.
   */
  storeUrl(url: string): void {
    sessionStorage.setItem(this.previousUrlKey, JSON.stringify(url));
  }

  /**
   * El método getUrl() se utiliza para recuperar la URL anterior del usuario del almacenamiento local del navegador. El método utiliza el método getItem() del objeto sessionStorage para recuperar la URL anterior del usuario.
   * @returns El método devuelve la URL anterior del usuario.
   */
  getUrl(): string | null {
    const previousUrl = sessionStorage.getItem(this.previousUrlKey);
    return previousUrl ? (JSON.parse(previousUrl) as string | null) : previousUrl;
  }

  /**
   * El método clearUrl() se utiliza para borrar la URL anterior del usuario del almacenamiento local del navegador.
   */
  clearUrl(): void {
    localStorage.removeItem(this.previousUrlKey);
  }

  /**
   * El método storeAuthenticationToken() se utiliza para almacenar el token de autenticación del usuario en el almacenamiento local del navegador.
   * El método utiliza el método setItem() del objeto localStorage o sessionStorage para almacenar el token de autenticación del usuario, dependiendo del valor del parámetro rememberMe.
   * @param authenticationToken Representa el token de autenticación del usuario
   * @param rememberMe De tipo boolean que indica si el usuario desea recordar su sesión o no.
   */
  storeAuthenticationToken(authenticationToken: string, us: string, user: string, num: any, nam: string): void {
    authenticationToken = JSON.stringify(authenticationToken);

    this.clearAuthenticationToken();

    localStorage.setItem(this.authenticationKey, authenticationToken);
  }

  /**
   * El método getAuthenticationToken() se utiliza para recuperar el token de autenticación del usuario del almacenamiento local del navegador.
   * @returns El método devuelve el token de autenticación del usuario.
   */
  getAuthenticationToken(): string | null {
    const authenticationToken = localStorage.getItem(this.authenticationKey) ?? sessionStorage.getItem(this.authenticationKey);
    return authenticationToken ? (JSON.parse(authenticationToken) as string | null) : authenticationToken;
  }

  /**
   * El método clearAuthenticationToken() se utiliza para borrar el token de autenticación del usuario del almacenamiento local del navegador.
   * El método utiliza el método removeItem() del objeto localStorage o sessionStorage para borrar el token de autenticación del usuario, dependiendo del valor del parámetro rememberMe.
   *
   */
  clearAuthenticationToken(): void {
    sessionStorage.removeItem(this.authenticationKey);
    localStorage.removeItem(this.authenticationKey);
  }

  clearLogOut(): void {
    localStorage.clear();
    sessionStorage.clear();
  }

  getProducts(): Observable<any>{
    return this.http.get('http://127.0.0.1:8000/api/productos')
  }

  del(product: any): Observable<any>{
    const credentials = new FormData()
    credentials.append("producto", product)
    return this.http.post('http://127.0.0.1:8000/api/eliminar', credentials)
  }

  sell(credentials:any): Observable<Object> {
    return this.http.post('http://127.0.0.1:8000/api/productos', credentials)
  }

}
