import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { usuarios } from 'src/app/models/usuarios.model';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-admin-app-usuarios',
  templateUrl: './admin-app-usuarios.component.html',
  styleUrls: ['./admin-app-usuarios.component.scss'],
  providers: [UsuariosService]
})
export class AdminAppUsuariosComponent implements OnInit {
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
    this._UsuariosService.agregarAdmin(this.usuarioModel, this._UsuariosService.obtenerToken()).subscribe(
      (response)=>{
        console.log(response);
        this.getUsuarios()
        addUsuarioForm.reset()
        Swal.fire({
          icon: 'success',
          title: 'Operación exitosa',
          text: "Admin de Hotel creado exitosamente"
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
