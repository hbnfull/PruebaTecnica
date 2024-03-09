import { Component, Input } from '@angular/core';
/**
 * Este componente se utiliza para mostrar un avatar en la vista de la aplicación.
 * El componente tiene tres propiedades de entrada: type, initial y src.
 */
@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent {
  /**
   * Es de tipo string y se utiliza para determinar el tipo de avatar que se mostrará. El valor por defecto es 'icon'.
   */
  @Input() type = 'icon';
  /**
   * Es de tipo string y se utiliza para mostrar la inicial del usuario en el avatar. El valor por defecto es 'M'.
   */
  @Input() initial = 'M';

  /**
   * Es de tipo string y se utiliza para especificar la URL de la imagen del avatar. El valor por defecto es './assets/images/avatar.png'
   */
  @Input() src = './assets/images/avatar.png';
}
