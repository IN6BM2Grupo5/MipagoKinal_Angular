import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { productos } from '../models/productos.model'
import { pedidos } from '../models/pedidos.model'

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  public url: String = 'http://localhost:3000/api';
  public headersVariable = new HttpHeaders().set('Content-Type', 'application/json');
  public identidad;
  public token;

  constructor(public _http: HttpClient) { }

  agregarProducto(modeloProducto: productos, token): Observable<any>{
    let parametros = JSON.stringify(modeloProducto);
    let headersToken = this.headersVariable.set('Authorization', token)

    return this._http.post(this.url+'/productoConStock', parametros, {headers: headersToken})
  }

  obtenerProductosCafeteria(token): Observable<any>{
    let headersToken = this.headersVariable.set('Authorization', token)

    return this._http.get(this.url + '/productosCafeteria', { headers: headersToken })
  }

  obtenerProductosSecretaria(token): Observable<any>{
    let headersToken = this.headersVariable.set('Authorization', token)

    return this._http.get(this.url + '/productosSecretaria', { headers: headersToken })
  }

  eliminarProducto(id : String, token): Observable<any> {
    let headersToken = this.headersVariable.set('Authorization',token)

    return this._http.delete(this.url + '/eliminarProductos/' + id, { headers: headersToken })
  }

  editarProducto(modeloProducto: productos, token): Observable<any>{
    let parametros = JSON.stringify(modeloProducto);
    let headersToken = this.headersVariable.set('Authorization', token)

    return this._http.put(this.url+'/editarProducto/'+modeloProducto._id, parametros, {headers: headersToken})
  }


  obtenerProductosId(id : String, token): Observable<any> {

    let headersToken = this.headersVariable.set('Authorization',token)

    return this._http.get(this.url + '/productoPorId/' + id, { headers: headersToken  })
  }

  agregarPedido(modeloPedido: pedidos, token): Observable<any>{
    let parametros = JSON.stringify(modeloPedido);
    let headersToken = this.headersVariable.set('Authorization', token)

    return this._http.post(this.url+'/pedido/'+ modeloPedido.idProducto, parametros, {headers: headersToken})
  }



}
