import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { ProductosService } from 'src/app/services/productos.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-usuario-carrito',
  templateUrl: './usuario-carrito.component.html',
  styleUrls: ['./usuario-carrito.component.scss'],
  providers: [UsuariosService, ProductosService]
})
export class UsuarioCarritoComponent implements OnInit {
  public identidad;
  public idPedido: String;
  public pedidosModelGet= []
  public total: Number = 0;
  constructor(private _UsuariosService: UsuariosService, private _ProductosService: ProductosService) { }

  ngOnInit(): void {
    this.getPedidos()
  }

  getPedidos(){
    this.pedidosModelGet= []
    this._ProductosService.obtenerPedidos(this._UsuariosService.obtenerToken()).subscribe(
      (response) => {
        for(let i=0; i<response.pedidos.length; i++){
          if(response.pedidos[i].tipo == "Secretaria" && response.pedidos[i].producto != "Marbete"){
            this.pedidosModelGet.push(response.pedidos[i])
          }
        }
        this.pedidosModelGet.sort((a, b) => Date.parse(a.fechaPedido) - Date.parse(b.fechaPedido));
        this.getTotal()
        this.getIdentidad()
        console.log(this.pedidosModelGet)
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

  cancelar(id){
    this._ProductosService.cancelarPedido(id , this._UsuariosService.obtenerToken()).subscribe(
      (response)=>{
        this.getPedidos()
        Swal.fire({
          icon: 'success',
          title: 'Operación exitosa',
          text: "Pedido cancelado exitosamente"
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

  getTotal(){
    this.total=0;
    for(let i = 0; i < this.pedidosModelGet.length; i++){
      this.total = this.total + this.pedidosModelGet[i].subTotal
    }
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
}
