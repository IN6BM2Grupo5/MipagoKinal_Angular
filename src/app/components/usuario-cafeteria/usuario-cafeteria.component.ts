import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { ProductosService } from 'src/app/services/productos.service';
import { productos } from 'src/app/models/productos.model';
import { pedidos } from 'src/app/models/pedidos.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-usuario-cafeteria',
  templateUrl: './usuario-cafeteria.component.html',
  styleUrls: ['./usuario-cafeteria.component.scss'],
  providers: [UsuariosService, ProductosService]
})
export class UsuarioCafeteriaComponent implements OnInit {
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

  getProductos(){
    this.getIdentidad()
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

        if(error.error.mensaje=="No dispones de una maquina del tiempo McFly"){
          Swal.fire({
            icon: 'error',
            imageUrl: '../../../assets/img/delorean.png',
            imageHeight: 150,
            title: 'Oops...',
            text: error.error.mensaje
          })
        }else{
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: error.error.mensaje
          })
        }


      }
    )
  }

}
