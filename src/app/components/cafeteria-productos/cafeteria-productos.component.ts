import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-cafeteria-productos',
  templateUrl: './cafeteria-productos.component.html',
  styleUrls: ['./cafeteria-productos.component.scss']
})
export class CafeteriaProductosComponent implements OnInit {

  valorStock: String="si";
  constructor() { }

  ngOnInit(): void {

  }

  cambiarValor(valor) {
    const input = document.getElementById('inputCantidad') as HTMLInputElement | null;

    if(valor=="no"){
      input.disabled=true
    }else{
      input.disabled=false;
    }
  }
}
