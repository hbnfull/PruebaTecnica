import { Component, OnInit } from '@angular/core';
import { AccountService } from '@services/account.service';
/**
 * Este componente se utiliza para mostrar la cabecera de la aplicación.
 * El componente tiene una propiedad llamada hasAuthentication que se utiliza para determinar si el usuario está autenticado o no.
 */
import { LoginService } from '@services/login.service';
import { Router } from '@angular/router';
import { SERVER_URL_2 } from '@env/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  /**
   * La propiedad se inicializa en false, lo que significa que el componente asume que el usuario no está autenticado por defecto.
   * La propiedad se utiliza para determinar si el usuario está autenticado o no y se utiliza en la vista del componente para mostrar
   * diferentes opciones de navegación en función del estado de autenticación del usuario
   */
  hasAuthentication = true

  /**
   * El constructor acepta un parámetro llamado accountService que es de tipo AccountService.
   * El parámetro se utiliza para inyectar el servicio AccountService en el componente
   * @param accountService
   */


  private url = SERVER_URL_2;

  constructor(
    private accountService: AccountService,
    private loginService: LoginService,
    private router: Router
    ) {}

  /**
   * En el método, se llama al método isAuthenticated() del servicio AccountService para determinar si el usuario está autenticado o no.
   * Luego, se llama al método identity() del servicio AccountService para obtener la identidad del usuario.
   * El método identity() devuelve un observable que se suscribe para obtener la identidad del usuario
   * Dentro del bloque de suscripción, se verifica si el usuario está autenticado o no.
   * Si el usuario está autenticado, se establece la propiedad hasAuthentication en false.
   * Si el usuario no está autenticado, se establece la propiedad hasAuthentication en true.
   */
  ngOnInit(): void {
    this.accountService.identity().subscribe(() => {
      if (this.router.url == '/login') {
        this.hasAuthentication = false;
      }
      else if (this.accountService.isAuthenticated()) {
        this.hasAuthentication = true;
      } else{
        this.hasAuthentication = true;
      }
    });
  }

  sell():any{
    this.router.navigate(['sale']);
  }

  buyList():any{
    this.router.navigate(['cart']);
  }

  account(): any{
    this.router.navigate(['login']);
  }

  logOut(): void {
    this.loginService.logout().subscribe({
      next: () => {
          this.router.navigate(['login']);
      },
    });
}

}