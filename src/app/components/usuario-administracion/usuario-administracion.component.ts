import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { ProductosService } from 'src/app/services/productos.service';
import { productos } from 'src/app/models/productos.model';
import { pedidos } from 'src/app/models/pedidos.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-usuario-administracion',
  templateUrl: './usuario-administracion.component.html',
  styleUrls: ['./usuario-administracion.component.scss'],
  providers: [UsuariosService, ProductosService]
})
export class UsuarioAdministracionComponent implements OnInit {
  public identidad;
  public idPedido: String;
  public pedidosModel: pedidos;
  public ProductosModelGet: productos;
  constructor(private _UsuariosService: UsuariosService, private _ProductosService: ProductosService) {
    this.pedidosModel = new pedidos(
      "",
      "",
      0,
      0,
      "",
      "",
      "",
      "",
      "",
      ""
    )
  }

  ngOnInit(): void {
    this.getProductos()
  }

  getProductos(){
    this.getIdentidad()
    this._ProductosService.obtenerProductosSecretaria(this._UsuariosService.obtenerToken()).subscribe(
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

  getIdentidad() {
    this._UsuariosService.obtenerAlumnoId(this._UsuariosService.obtenerIdentidad()._id, this._UsuariosService.obtenerToken()).subscribe(
      (response) => {
          this.identidad = response.usuario;

          console.log(response.usuario)
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

  Pedir(pedirForm){
    this.pedidosModel.idProducto = this.idPedido;
    console.log(this.pedidosModel)
    this._ProductosService.agregarPedido(this.pedidosModel, this._UsuariosService.obtenerToken()).subscribe(
      (response)=>{
        this.getProductos()
        pedirForm.reset()
        Swal.fire({
          icon: 'success',
          title: 'Operación exitosa',
          text: "Pedido creado exitosamente"
        })
      },
      (error)=>{
        Swal.fire({
          icon: 'error',
          imageUrl: '../../../assets/img/delorean.png',
          imageHeight: 150,
          title: 'Oops...',
          text: error.error.mensaje
        })
      }
    )
  }

}
