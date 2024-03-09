import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

/**
 * La constante se utiliza para almacenar la URL de los datos de las pestañas de la aplicación.
 * La URL es una ruta relativa que apunta al archivo tabs-data.json en la carpeta assets/config del proyecto.
 * El archivo tabs-data.json contiene los datos de las pestañas de la aplicación.
 */
const tabsCotizacionUrl = 'assets/config/cotizacion/tabs-data.json';

/**
 * La constante se utiliza para almacenar la URL de los datos de las pestañas de la aplicación.
 * La URL es una ruta relativa que apunta al archivo tabs-data.json en la carpeta assets/config/endosos del proyecto.
 * El archivo tabs-data.json contiene los datos de las pestañas de la aplicación.
 */
const tabsEndososnUrl = 'assets/config/endosos/tabs-data.json';


/**
 * La constante se utiliza para almacenar la URL de los datos de las pestañas de la aplicación.
 * La URL es una ruta relativa que apunta al archivo tabs-data.json en la carpeta assets/config/endosos-mobimiento-prima del proyecto.
 * El archivo tabs-data.json contiene los datos de las pestañas de la aplicación.
 */
const tabsEndososnPrimaUrl = 'assets/config/endosos-mobimiento-prima/tabs-data.json';

/**
 * La constante se utiliza para almacenar la URL de los datos de las pestañas de la aplicación.
 * La URL es una ruta relativa que apunta al archivo tabs-data.json en la carpeta assets/config del proyecto.
 * El archivo tabs-data.json contiene los datos de las pestañas de la aplicación.
 */
const tabsEmisionUrl = 'assets/config/emision/tabs-data.json';

/**
 * La constante se utiliza para almacenar la URL de los datos de las pestañas de la aplicación.
 * La URL es una ruta relativa que apunta al archivo tabs-data.json en la carpeta assets/config del proyecto.
 * El archivo tabs-data.json contiene los datos de las pestañas de la aplicación.
 */
const tabsEndososAdicionalesUrl = 'assets/config/endosos-adicionales/tabs-data.json';
/**
 * La clase es un servicio de Angular que se proporciona en la raíz de la aplicación (providedIn: 'root') y se utiliza para obtener datos de la aplicación.
 */
@Injectable({
    providedIn: 'root'
  })
  export class QuoteService {
    /**
     * El constructor de la clase acepta un parámetro http de tipo HttpClient.
     * @param http El parámetro http es de tipo HttpClient y se utiliza para realizar solicitudes HTTP.
     */
    constructor(private http: HttpClient) { }

    /**
     * El método getTabsData() se utiliza para obtener los datos de las pestañas de la aplicación.
     * @returns  El método devuelve un objeto Observable que representa la respuesta HTTP.
     */
    getTabsData(): Observable<any> {
      return this.http.get(tabsCotizacionUrl);
    }

     /**
     * El método getTabsData() se utiliza para obtener los datos de las pestañas de la aplicación.
     * @returns  El método devuelve un objeto Observable que representa la respuesta HTTP.
     */
     getEndososTabsData(): Observable<any> {
      return this.http.get(tabsEndososnUrl);
    }

    /**
     * El método getEndososPrimaTabsData()  se utiliza para obtener los datos de las pestañas de la aplicación.
     * @returns  El método devuelve un objeto Observable que representa la respuesta HTTP.
     */
    getEndososPrimaTabsData(): Observable<any> {
      return this.http.get(tabsEndososnPrimaUrl);
    }

    /**
     * El método getEmisionTabsData() se utiliza para obtener los datos de las pestañas de la aplicación.
     * @returns  El método devuelve un objeto Observable que representa la respuesta HTTP.
     */
    getEmisionTabsData(): Observable<any> {
      return this.http.get(tabsEmisionUrl);
    }


    /**
     * El método getEmisionTabsData() se utiliza para obtener los datos de las pestañas de la aplicación.
     * @returns  El método devuelve un objeto Observable que representa la respuesta HTTP.
     */
    getEndososAdicionalesTabsData(): Observable<any> {
      return this.http.get(tabsEndososAdicionalesUrl);
    }

    /**
     * El método getDataFromApi() se utiliza para obtener datos de una API
     * @param apiUrl
     * @returns  El método devuelve un objeto Observable que representa la respuesta HTTP.
     */
    getDataFromApi(apiUrl: string): Observable<any> {
      return this.http.get(apiUrl);
    }

  }
