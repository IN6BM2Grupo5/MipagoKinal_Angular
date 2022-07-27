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
  public UsuariosModelPut: usuarios;
  public idEliminar: String;

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
    ),
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

  registrar(addUsuarioForm){
    this._UsuariosService.agregarAlumno(this.usuarioModel, this._UsuariosService.obtenerToken()).subscribe(
      (response)=>{
        console.log(response);
        this.getUsuarios()
        addUsuarioForm.reset()
        Swal.fire({
          icon: 'success',
          title: 'Operación exitosa',
          text: "Alumno creado exitosamente"
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

  eliminar(){
    this._UsuariosService.eliminarUsuario(this.idEliminar, this._UsuariosService.obtenerToken()).subscribe(
      (response)=>{
        this.getUsuarios()
        console.log(this.idEliminar)
        Swal.fire({
          icon: 'success',
          title: 'Operación exitosa',
          text: "Alumno eliminado exitosamente"
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

  editar(editarUsuarioForm){
    this._UsuariosService.editarUsuario(this.UsuariosModelPut, this._UsuariosService.obtenerToken()).subscribe(
      (response)=>{
        console.log(response);
        this.getUsuarios()
        editarUsuarioForm.reset()
        Swal.fire({
          icon: 'success',
          title: 'Operación exitosa',
          text: "Alumno editado exitosamente"
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
