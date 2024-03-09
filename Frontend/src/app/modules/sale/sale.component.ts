import { Component, ViewChild, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import {FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LoginService } from '@services/login.service';
import { AccountService } from '@services/account.service';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { HttpErrorResponse } from '@angular/common/http';
import { StateStorageService } from '@services/state-storage.service';
import { product } from '@models/products.models';

interface HtmlInputEvent extends Event{
  target: HTMLInputElement & EventTarget
}

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.scss']
})
export class saleComponent implements OnInit{
  

  @ViewChild('username', { static: false })
  username!: ElementRef;
  imag!: File;
  nproduct!: product;

  authenticationError = false;
  productExist = false;
  boton = false;
  loading = false;

  hide = true
  hidden: boolean = false;
  
  sellForm = new FormGroup({
    producto: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    stock: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    precio: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    descripcion: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    imagen: new FormControl('', { nonNullable: true, validators: [Validators.required] })
  });


  constructor(
    public dialog: MatDialog,
    private router: Router,
    private store: StateStorageService
    ) {}
    


  ngOnInit(): void {
    this.loading = false;
    this.boton = false;
  }

  sell(): void{
    const formData = new FormData();
    formData.append("producto", this.sellForm.getRawValue().producto);
    formData.append("stock", this.sellForm.getRawValue().stock);
    formData.append("precio", this.sellForm.getRawValue().precio);
    formData.append("descripcion", this.sellForm.getRawValue().descripcion);
    formData.append("imagen", this.imag);

    this.store.sell(formData).subscribe({
      next: () => {
        this.authenticationError = false;
        this.router.navigate(['dashboard']);
      },
      error: (err: HttpErrorResponse) => {
        if (err.status == 401) {
        this.productExist = true
        this.loading = false
        }
        else {
        console.error("Error con el servidor del Backend")
        }
      }
    }); 
  }

  inputFoto(event:any){
    this.imag=event;
  }

}
