import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '@services/login.service';
import { HttpErrorResponse } from '@angular/common/http';
import { StateStorageService } from '@services/state-storage.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{

  user: any;
  content: any;
  isContentReady: boolean = false;
  productExist?: boolean;

  constructor(
    private router: Router, 
    private store: StateStorageService,
    public login: LoginService
    ) {
    this.user = localStorage.getItem("usuario") ?? sessionStorage.getItem("usuario")
   }

  /**
   * El método se ejecuta cuando el componente se inicializa.
   */
  ngOnInit() {
    this.getDataFromApi();
  }

  getDataFromApi(): any{
    this.store.getProducts().subscribe(
      data => {
        this.content = data;
        this.isContentReady = true;
        console.log(this.content);
      });
  }

  sell():any{
    this.router.navigate(['sale']);
  }

  buyList(productos?:any):any{
    console.log(productos);
    // this.router.navigate(['cart']);
  }

  del(productos:any){
    console.log(productos);
    this.store.del(productos).subscribe({
      next: () => {
          this.router.navigate(['login']);
      },
      error: (err: HttpErrorResponse) => {
        if (err.status == 401) {
        this.productExist = true
        }
        else {
        console.error("Error con el servidor del Backend")
        }
      }
    }); 
  }

  redirectCotizador(){
    this.router.navigate(['cotizador']);
  }
}
