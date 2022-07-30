import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { usuarios } from 'src/app/models/usuarios.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-marbete',
  templateUrl: './marbete.component.html',
  styleUrls: ['./marbete.component.scss'],
  providers: [UsuariosService]
})
export class MarbeteComponent implements OnInit {
  public UsuariosModelGet: usuarios;
  public identidad;
  public UsuariosModelPut: usuarios;
  constructor(private _UsuariosService: UsuariosService) {
    this.UsuariosModelPut = new usuarios(
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      0,
      0,
      0,
      "",
      [{
        vehiculo: "",
        placas: "",
        modelo:"",
        fechaInicio: "",
        fechaFin: ""
      }]
    )
  }

  ngOnInit(): void {
    this.getIdentidad()
  }

  getIdentidad() {
    this._UsuariosService.obtenerAlumnoId(this._UsuariosService.obtenerIdentidad()._id, this._UsuariosService.obtenerToken()).subscribe(
      (response) => {
          this.identidad = response.usuario;
          this.identidad.correo = this.identidad.correo.replace("@kinal.edu.gt", "")
          console.log(response.usuario);
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

  ingresarVehiculo(ingresarVehiculoForm){
    this._UsuariosService.ingresarVehiculo(this.UsuariosModelPut, this._UsuariosService.obtenerToken()).subscribe(
      (response)=>{
        this.getIdentidad()
        console.log(response);
        ingresarVehiculoForm.reset()
        Swal.fire({
          icon: 'success',
          title: 'Operación exitosa',
          text: "vehiculo ingresado exitosamente"
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

  pedir(){
    this._UsuariosService.pedirMarbete(this._UsuariosService.obtenerToken()).subscribe(
      (response)=>{
        Swal.fire({
          icon: 'success',
          title: 'Operación exitosa',
          text: "Marbete solicitado exitosamente"
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
