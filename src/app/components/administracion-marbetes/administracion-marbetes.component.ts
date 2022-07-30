import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { ProductosService } from 'src/app/services/productos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-administracion-marbetes',
  templateUrl: './administracion-marbetes.component.html',
  styleUrls: ['./administracion-marbetes.component.scss'],
  providers: [UsuariosService, ProductosService]
})
export class AdministracionMarbetesComponent implements OnInit {
  public idPedido: String;
  public pedidosModelGet = []
  constructor(private _UsuariosService: UsuariosService, private _ProductosService: ProductosService) { }

  ngOnInit(): void {
    this.getPedidos()
  }

  getPedidos(){
    this._ProductosService.obtenerPedidos(this._UsuariosService.obtenerToken()).subscribe(
      (response) => {
        this.pedidosModelGet = []
        for(let i=0; i<response.pedidos.length; i++){
          if(response.pedidos[i].producto == "Marbete"){
            this.pedidosModelGet.push(response.pedidos[i])
          }
        }
        this.pedidosModelGet.sort((a, b) => Date.parse(a.fechaPedido) - Date.parse(b.fechaPedido));
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

  getPedidosCarnet(carnet){
    if(carnet){
      this._ProductosService.obtenerPedidosCarnet(carnet, this._UsuariosService.obtenerToken()).subscribe(
        (response) => {
          this.pedidosModelGet = []
          for(let i=0; i<response.pedidos.length; i++){
            if(response.pedidos[i].producto == "Marbete"){
              this.pedidosModelGet.push(response.pedidos[i])
            }
          }
          this.pedidosModelGet.sort((a, b) => Date.parse(a.fechaPedido) - Date.parse(b.fechaPedido));
        },
        (error) => {
          this.getPedidos();
        }
      )
    }else{
      this.getPedidos()
    }

  }

  generar(id){
    this._ProductosService.confirmarPedido(id , this._UsuariosService.obtenerToken()).subscribe(
      (response)=>{
        this.getPedidos()
        Swal.fire({
          icon: 'success',
          title: 'Operación exitosa',
          text: "marbete generado exitosamente"
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
