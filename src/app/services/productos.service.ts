import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { productos } from '../models/productos.model'

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

    if(modeloProducto.stock == null) {
      return this._http.post(this.url+'/productoSinStock', parametros, {headers: headersToken})
    }else{
      return this._http.post(this.url+'/productoConStock', parametros, {headers: headersToken})
    }
  }


}
