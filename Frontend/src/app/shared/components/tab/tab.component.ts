import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { StatusType, TabItems } from './tab.model';
/**
 * Este componente se utiliza para mostrar una lista de pestañas en una aplicación.
 * El componente tiene cuatro propiedades de entrada: items, status, statusText y statusClass.
 * La propiedad items es un arreglo de objetos que representan las pestañas.
 * La propiedad status es un número que representa el estado de la pestaña seleccionada.
 * Las propiedades statusText y statusClass se utilizan para mostrar el estado de la pestaña seleccionada en la vista.
 */
@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit, OnChanges {
  /**
   *  Es un evento de salida que se emite cuando se cambia el estado de una pestaña.
   */
  @Output() changeStatus = new EventEmitter<boolean>();

  /**
   * Es un evento de salida que se emite cuando se selecciona una pestaña.
   */
  @Output() onTabSelected = new EventEmitter<number>();
  /**
   * Es un arreglo de objetos que representan las pestañas.
   */
  @Input() items: TabItems = [];
  /**
   * Es un número que representa el estado de la pestaña seleccionada.
   */
  @Input() status = 0;
  /**
   * Es una cadena de caracteres que representa el estado de la pestaña seleccionada.
   */
  tabSelected: number = 0;

  /**
   * Es una cadena de caracteres que representa el estado de la pestaña seleccionada.
   */
  statusText = StatusType.default;

  /**
   * Es una cadena de caracteres que representa la clase CSS que se utilizará para mostrar el estado de la pestaña seleccionada.
   */
  statusClass = "";

  /**
   * Es un booleano que representa si la pestaña seleccionada está deshabilitada.
   */
  isDisabled = false;

  /**
   * Este es el constructor del componente.
   */
  constructor() {
  }

  /**
   * Este método se ejecuta cuando se inicializa el componente.
   * El método se utiliza para obtener el estado de cada pestaña.
   */
  ngOnInit(): void {
    this.items.forEach((tab, index) => {
      this.getStatus(index);
    });
  }

  /**
   * Este método se ejecuta cuando se cambia el valor de una propiedad de entrada.
   * @param changes Es un objeto que contiene los cambios de las propiedades de entrada.
   */
  ngOnChanges(changes: SimpleChanges) {
    if(changes['status']){
      const statusValue = changes['status'];
      this.status = statusValue.currentValue;
    }
  }


  /**
   * Este método se utiliza para obtener la clase CSS que se utilizará para mostrar el estado de una pestaña.
   * @param type Es un número que representa el estado de una pestaña.
   * @returns Devuelve una cadena de caracteres que representa el estado de una pestaña.
   *
   */
  getClass(type: any) {
    let status = Object.keys(StatusType)[Object.values(StatusType).indexOf(type)];
    return status;
  }

  /**
   * Este método se utiliza para obtener el estado de una pestaña.
   * @param index Es un número que representa el índice de una pestaña.
   * @returns Devuelve un objeto que contiene el estado de una pestaña.
   */
  getStatus(index: any) {
    const tab = this.items[index];
    let statusText = '';
    let statusClass = '';
    let disabled = false;
    switch (tab.status) {
      case 0:
        statusText = StatusType.default
        statusClass = this.getClass(StatusType.default);
        disabled = true
        break;
      case 1:
        statusText = StatusType.process
        statusClass = this.getClass(StatusType.process);
        break;
      case 2:
        statusText = StatusType.completed
        statusClass = this.getClass(StatusType.completed);
        break;
      case 3:
        statusText = StatusType.warning
        statusClass = this.getClass(StatusType.warning);
        break;
      case 4:
        statusText = StatusType.danger
        statusClass = this.getClass(StatusType.danger);
        break;
    }
    return { statusText, statusClass, disabled};
  }

  /**
   * Este método se ejecuta cuando se cambia el estado de una pestaña.
   * @param event  Es un objeto que contiene el evento que se ejecuta cuando se cambia el estado de una pestaña.
   * @param statusDisabled  Es un booleano que representa si la pestaña seleccionada está deshabilitada.
   */
  check(event: any, statusDisabled: any){
    if (statusDisabled) {

    }
  }

  /**
   *  Este método se ejecuta cuando se selecciona una pestaña.
   * @param event  Es un objeto que contiene el evento que se ejecuta cuando se selecciona una pestaña.
   * @param index  Es un número que representa el índice de una pestaña.
   */
  seleccionarPestana(event: any, index: number) {
      this.onTabSelected.emit(index);
  }
}
