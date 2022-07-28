import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { ProductosService } from 'src/app/services/productos.service';
import Swal from 'sweetalert2';
import { pedidos } from 'src/app/models/pedidos.model';

@Component({
  selector: 'app-cafeteria-pedidos',
  templateUrl: './cafeteria-pedidos.component.html',
  styleUrls: ['./cafeteria-pedidos.component.scss'],
  providers: [UsuariosService, ProductosService]
})
export class CafeteriaPedidosComponent implements OnInit {
  public idPedido: String;
  public pedidosModelGet: pedidos
  constructor(private _UsuariosService: UsuariosService, private _ProductosService: ProductosService) { }

  ngOnInit(): void {
    this.getPedidos()
  }

  getPedidos(){
    this._ProductosService.obtenerPedidos(this._UsuariosService.obtenerToken()).subscribe(
      (response) => {
        this.pedidosModelGet = response.pedidos;
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

  getPedidosCarnet(carnet){
    if(carnet){
      this._ProductosService.obtenerPedidosCarnet(carnet, this._UsuariosService.obtenerToken()).subscribe(
        (response) => {
          console.log(response)
            this.pedidosModelGet = response.pedidos;
        },
        (error) => {
          this.getPedidos();
        }
      )
    }else{
      this.getPedidos()
    }

  }

  confirmar(id){
    this._ProductosService.confirmarPedido(id , this._UsuariosService.obtenerToken()).subscribe(
      (response)=>{
        this.getPedidos()
        Swal.fire({
          icon: 'success',
          title: 'Operación exitosa',
          text: "Pedido confirmado exitosamente"
        })
      },
      (error)=>{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.error.mensaje
        })
      }
    )
  }
}
