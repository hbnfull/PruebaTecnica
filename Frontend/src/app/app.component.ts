import { Component } from '@angular/core';

/**
 * Este componente es el componente principal de la aplicación y se utiliza para mostrar la vista principal de la aplicación.
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  /**
   * La propiedad title se utiliza para establecer el título de la aplicación en la vista. En este caso, el valor de la propiedad es 'qualitas-sise'.
   */
  title = 'qualitas-sise';
}
