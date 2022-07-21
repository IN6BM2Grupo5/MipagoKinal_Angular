import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { usuarios } from 'src/app/models/usuarios.model';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-admin-app-administradores',
  templateUrl: './admin-app-administradores.component.html',
  styleUrls: ['./admin-app-administradores.component.scss'],
  providers: [UsuariosService]
})
export class AdminAppAdministradoresComponent implements OnInit {
  public usuarioModel: usuarios;
  public UsuariosModelGet: usuarios;

  constructor(
    private _UsuariosService: UsuariosService
  ) {
    this.usuarioModel = new usuarios(
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      0,
      0,
      [{
        vehiculo: "",
        placas: "",
        modelo:"",
        fechaInicio: "",
        fechaFin: ""
      }]
      )
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

  registrar(addUsuarioForm){
    this._UsuariosService.agregarAlumno(this.usuarioModel, this._UsuariosService.obtenerToken()).subscribe(
      (response)=>{
        console.log(response);
        this.getUsuarios()
        addUsuarioForm.reset()
        Swal.fire({
          icon: 'success',
          title: 'Operación exitosa',
          text: "Administrador creado exitosamente"
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
