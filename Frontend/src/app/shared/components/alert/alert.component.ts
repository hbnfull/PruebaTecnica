
import { Component, Input, OnInit } from '@angular/core';
import { AlertType } from './alert.model';
/**
 * Este componente se utiliza para mostrar una alerta en la vista de la aplicación.
 * El componente tiene seis propiedades de entrada: type, title, description, link, textLink y isVisible
 */
@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent implements OnInit{
  /**
   * La propiedad type es de tipo string y se utiliza para determinar el tipo de alerta que se mostrará. El valor por defecto es 'info'
   */
  @Input() type = "info";

  /**
   * Las propiedad title, es de tipo string y se utilizan para mostrar el título, la descripción, el enlace y el texto del enlace de la alerta respectivamente.
   * El valor por defecto de title es una cadena vacía, mientras que el valor por defecto de las otras propiedades es null
   */
  @Input() title = '';
  /**
   * Las propiedad description es de tipo string y se utilizan para mostrar el título, la descripción, el enlace y el texto del enlace de la alerta respectivamente.
   * El valor por defecto de title es una cadena vacía, mientras que el valor por defecto de las otras propiedades es null
   */
  @Input() description = '';
  /**
   * Las propiedad link es de tipo string y se utilizan para mostrar el título, la descripción, el enlace y el texto del enlace de la alerta respectivamente.
   * El valor por defecto de title es una cadena vacía, mientras que el valor por defecto de las otras propiedades es null
   */
  @Input() link = '';
  /**
   * Las propiedad textLink es de tipo string y se utilizan para mostrar el título, la descripción, el enlace y el texto del enlace de la alerta respectivamente.
   * El valor por defecto de title es una cadena vacía, mientras que el valor por defecto de las otras propiedades es null
   */
  @Input() textLink = '';

  /**
   * la propiedad typeIcon en 'info_outline'. Si el tipo de alerta es 'success', se establece la propiedad typeIcon en 'check_circle_outline'.
   * Si el tipo de alerta es 'warning', se establece la propiedad typeIcon en 'warning_outline'.
   * Si el tipo de alerta es 'danger', se establece la propiedad typeIcon en 'error_outline'
   */
  @Input()
  typeIcon = "error_outline";

  /**
   * La propiedad isVisible es de tipo boolean y se utiliza para determinar si la alerta es visible o no. El valor por defecto es true.
   */
  isVisible: boolean;
  
  @Input() showClose = true;

  /**
   * El constructor no acepta ningún parámetro y se utiliza para inicializar la propiedad isVisible en true
   */
  constructor(
  ) {
    this.isVisible = true;
  }

  /**
   *  El método ngOnInit() se ejecuta cuando el componente se inicializa y se utiliza para obtener el icono correspondiente al tipo de alerta
   */
  ngOnInit(): void {
    this.getTypeIcon();
  }


  /**
   * El método se utiliza para ocultar la alerta en la vista de la aplicación
   */
  public dismiss(): void {
    this.isVisible = !this.isVisible;
  }

  /**
   * Se utiliza para obtener la clase CSS correspondiente al tipo de alerta.
   * Dentro del método, se establece la propiedad isVisible en el valor opuesto al que tenía anteriormente utilizando el operador de negación !.
   * Esto significa que si la propiedad isVisible era true, se establecerá en false, y si era false, se establecerá en true.
   */
  getTypeClass() {
    return {
			[`alert-${this.type}`]: true
		}
  }


  /**
   * Se utiliza para obtener el icono correspondiente al tipo de alerta.
   */
  getTypeIcon(){

    if (!this.typeIcon) {

      switch (this.type) {
        case AlertType.info:
          this.typeIcon = "error_outline";
          break;
        case AlertType.danger:
          this.typeIcon = "error";
          break;
        case AlertType.warning:
          this.typeIcon = "warning";
          break;
        case AlertType.dark:
          this.typeIcon = "check_circle";
          break;        
      }
      
    }
    
  }


}
