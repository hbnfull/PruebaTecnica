import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Login } from '@models/login.model';
import { StateStorageService } from '@services/state-storage.service';
import { SERVER_URL } from '@env/environment';
/**
 * El tipo se utiliza para representar un token JWT que contiene un id_token.
 */
type JwtToken = {
  id_token: string;
  usuario: string;
  user: string;
  numOfic: number;
  namOfic: string;
};
/**
 * La clase es un servicio de Angular que se proporciona en la raíz de la aplicación (providedIn: 'root') y se utiliza para manejar la autenticación del usuario en el servidor.
 */
@Injectable({ providedIn: 'root' })
export class AuthServerProvider {
  private serverUrl = SERVER_URL + 'login';
  private serverUrl2 = SERVER_URL + 'logout';
  constructor(
    private http: HttpClient,
    private stateStorageService: StateStorageService
  ) {}

  /**
   * se utiliza para obtener el token de autenticación del usuario
   * @returns El método devuelve un token de autenticación del usuario.
   */
  getToken(): string {
    return this.stateStorageService.getAuthenticationToken() ?? '';
  }

  /**
   *  Se utiliza para enviar las credenciales del usuario al servidor y autenticar al usuario.
   *  El método utiliza el método http.post() para enviar una solicitud HTTP POST al servidor con las credenciales del usuario.
   *  Si la autenticación es exitosa, se utiliza el método authenticateSuccess() para almacenar el token de autenticación del usuario en el servicio StateStorageService
   * @param credentials
   * @returns  El método devuelve un objeto Observable que representa la respuesta HTTP.
   */
  login(credentials: Login): Observable<void> {
    return this.http
      .post<JwtToken>(this.serverUrl, credentials)
      .pipe(map(response => this.authenticateSuccess(response)));
  }

  /**
   * Se utiliza para cerrar la sesión del usuario y borrar el token de autenticación del usuario del servicio StateStorageService.
   * @returns  El método devuelve un objeto Observable que representa la respuesta HTTP
   */
  logout(): Observable<void> {
    return this.http
      .get(this.serverUrl2)
      .pipe(map(response => this.cLogOut(response)))
  }

  private authenticateSuccess(response: JwtToken): void {
    this.stateStorageService.storeAuthenticationToken(response.id_token, response.usuario, response.user, response.numOfic, response.namOfic);
  }

  private cLogOut(response: any): void{
    this.stateStorageService.clearLogOut()
    console.log(response.status)
  }
  
  sendData(data: JSON): Observable<void>{
    return this.http
    .post('http://127.0.0.1:8000/api/lprueba', data)
    .pipe(map(response => this.storeList(response)))
  }

  storeList(response: any): void{
    this.stateStorageService.storeList = response.list;
  }
  
}
