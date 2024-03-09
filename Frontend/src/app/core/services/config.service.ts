import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const configUrl = 'assets/config/cotizacion/configuration.json';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private configData: any;
  constructor(private http: HttpClient) { }

  loadConfig() {
    return this.http.get(configUrl)
      .toPromise()
      .then(data => {
        this.configData = data;
      });
  }

  get apiAammTarificacion() {
    return this.configData.aammTarificacion;
  }

  get apiAammValores() {
    return this.configData.aammValores;
  }

  get politicaCancelacion() {
    return this.configData.politicaCancelacion;
  }
  get noTarifaAutomatica(){
    return this.configData.noTarifaAutomatica;
  }
}
