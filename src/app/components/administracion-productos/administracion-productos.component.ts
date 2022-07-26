import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { ProductosService } from 'src/app/services/productos.service';
import { productos } from 'src/app/models/productos.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-administracion-productos',
  templateUrl: './administracion-productos.component.html',
  styleUrls: ['./administracion-productos.component.scss'],
  providers: [UsuariosService, ProductosService]
})
export class AdministracionProductosComponent implements OnInit {

  public ProductosModelGet: productos;
  public ProductosModelPut: productos;
  public ProductosModel: productos;
  valorStock: String="Si";
  valorStockEditar: String = "Si";
  public idEliminar: String;

  constructor(private _UsuariosService: UsuariosService, private _ProductosService: ProductosService) {
    this.ProductosModel = new productos(
      "",
      "",
      "",
      0,
      0,
      "",
      "",
      ""
    );
    this.ProductosModelPut = new productos(
      "",
      "",
      "",
      0,
      0,
      "",
      "",
      ""
    );
  }

  ngOnInit(): void {
    this.getProductos()
  }

  getProductos(){
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

  agregar(addProductoForm){
    this.ProductosModel.subTipo = this.valorStock;
    this.ProductosModel.descripcion=" "
    this._ProductosService.agregarProducto(this.ProductosModel, this._UsuariosService.obtenerToken()).subscribe(
      (response)=>{
        console.log(response);
        this.getProductos()
        addProductoForm.reset()
        Swal.fire({
          icon: 'success',
          title: 'Operación exitosa',
          text: "Producto creado exitosamente"
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

  editar(editarProductoForm){
    this.ProductosModelPut.subTipo = this.valorStockEditar;
    this.ProductosModelPut.descripcion=" "
    console.log(this.ProductosModelPut.stock)
    this._ProductosService.editarProducto(this.ProductosModelPut, this._UsuariosService.obtenerToken()).subscribe(
      (response)=>{
        this.getProductos()
        editarProductoForm.reset()
        Swal.fire({
          icon: 'success',
          title: 'Operación exitosa',
          text: "Producto editado exitosamente"
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

  eliminar(){
    this._ProductosService.eliminarProducto(this.idEliminar, this._UsuariosService.obtenerToken()).subscribe(
      (response)=>{
        this.getProductos()
        console.log(this.idEliminar)
        Swal.fire({
          icon: 'success',
          title: 'Operación exitosa',
          text: "Producto eliminado exitosamente"
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

  geProductosId(idProducto) {
    this._ProductosService.obtenerProductosId(idProducto, this._UsuariosService.obtenerToken()).subscribe(
      (response)=>{

        if(response.producto.subTipo == "ConStock"){
          this.valorStockEditar = "Si"
        }else{
          this.valorStockEditar = "No"
        }

        this.ProductosModelPut = response.producto;

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
