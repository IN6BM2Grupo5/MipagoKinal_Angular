import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { ProductosService } from 'src/app/services/productos.service';
import { productos } from 'src/app/models/productos.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-usuario-cafeteria',
  templateUrl: './usuario-cafeteria.component.html',
  styleUrls: ['./usuario-cafeteria.component.scss'],
  providers: [UsuariosService, ProductosService]
})
export class UsuarioCafeteriaComponent implements OnInit {
  public identidad;
  public ProductosModelGet: productos;
  constructor(private _UsuariosService: UsuariosService, private _ProductosService: ProductosService) {
    this.identidad = this._UsuariosService.obtenerIdentidad();
  }

  ngOnInit(): void {
    this.getProductos()
  }

  getProductos(){
    this._ProductosService.obtenerProductosCafeteria(this._UsuariosService.obtenerToken()).subscribe(
      (response) => {
          this.ProductosModelGet = response.productos;

          console.log(response.productos)
      },
      (error) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.error.mensaje
        })
      }
    )
  }

}
