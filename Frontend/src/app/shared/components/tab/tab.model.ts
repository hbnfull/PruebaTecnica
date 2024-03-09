/**
 * Esta enumeración tiene cinco valores: default, process, completed, warning y danger.
 * Cada valor es una cadena de caracteres que representa un estado de una pestaña en una aplicación. Los valores son Pendiente, Llenando..., Completa, Warning y Danger respectivamente.
 * La enumeración se exporta para que pueda ser utilizada en otros archivos de la aplicación.
 */
export enum StatusType {
	default = "Pendiente",
	process = "Llenando...",
	completed = "Completa",
	warning = "Warning",
	danger = "Danger"
}

/**
 * Esta interfaz define la estructura de un objeto que representa una pestaña en una aplicación.
 * La interfaz tiene cinco propiedades: numberStep, id, title, status y apiUrl.
 * La interfaz se exporta para que pueda ser utilizada en otros archivos de la aplicación.
 */
export interface TabItem {
  /**
   * La propiedad numberStep es de tipo number y representa el número de la pestaña.
   */
	numberStep: number;
  /**
   * La propiedad id es de tipo number y representa el identificador único de la pestaña.
   */
	id: number;
  /**
   * La propiedad title es de tipo string y representa el título de la pestaña.
   */
	title: string;
  /**
   * La propiedad status es de tipo number y representa el estado de la pestaña.
   */
	status: number;
  /**
   * La propiedad apiUrl es de tipo string y representa la URL de la API que se utilizará para obtener los datos de la pestaña.
   */
	apiUrl: string;
	url: string;
}

/**
 * Esta interfaz extiende la clase Array y define un arreglo de objetos que representan pestañas en una aplicación.
 * Cada objeto debe cumplir con la estructura definida en la interfaz TabItem.
 * La interfaz se exporta para que pueda ser utilizada en otros archivos de la aplicación.
 */
export interface TabItems extends Array<TabItem> {}
