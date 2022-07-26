import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { usuarios } from 'src/app/models/usuarios.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-administracion-alumnos',
  templateUrl: './administracion-alumnos.component.html',
  styleUrls: ['./administracion-alumnos.component.scss'],
  providers: [UsuariosService]
})
export class AdministracionAlumnosComponent implements OnInit {
  public UsuariosModelGet: usuarios;
  public UsuariosModelPut: any;
  public idEliminar: String;
  constructor(private _UsuariosService: UsuariosService) {
    this.UsuariosModelPut = []
  }

  getUsuarios(){
    this._UsuariosService.obtenerAlumnos(this._UsuariosService.obtenerToken()).subscribe(
      (response) => {
          this.UsuariosModelGet = response.usuarios;

          console.log(response.usuarios)
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

  getUsuariosCarnet(carnet){
    if(carnet){
      this._UsuariosService.obtenerAlumnoCarnet(carnet, this._UsuariosService.obtenerToken()).subscribe(
        (response) => {
            this.UsuariosModelGet = response.usuarios;

            console.log(response.usuarios)
        },
        (error) => {
          this.getUsuarios();
        }
      )
    }else{
      this.getUsuarios()
    }

  }

  getUsuariosId(idUsuario){
    this._UsuariosService.obtenerUsuariosId(idUsuario, this._UsuariosService.obtenerToken()).subscribe(
      (response)=>{
        this.UsuariosModelPut = response.usuario;
        console.log(this.UsuariosModelPut )
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

  agregarFondos(agregarFondosForm){
    this._UsuariosService.agregarFondos(this.UsuariosModelPut, this._UsuariosService.obtenerToken()).subscribe(
      (response)=>{
        console.log(response);
        this.getUsuarios()
        agregarFondosForm.reset()
        Swal.fire({
          icon: 'success',
          title: 'Operación exitosa',
          text: "fondos agregados exitosamente"
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

  ngOnInit(): void {
    this.getUsuarios()
  }
}
