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
  public UsuariosModelPut: usuarios;
  public idEliminar: String;

  roles = [
    {nombre: 'Admin Cafeteria', rol: 'Admin_Cafeteria'},
    {nombre: 'Admin Secretaria', rol: 'Admin_Secretaria' }
  ]

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
    this._UsuariosService.obtenerAdmins(this._UsuariosService.obtenerToken()).subscribe(
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
    console.log(this.usuarioModel)
    this._UsuariosService.agregarAdmin(this.usuarioModel, this._UsuariosService.obtenerToken()).subscribe(
      (response)=>{
        console.log(response);
        this.getUsuarios()
        addUsuarioForm.reset()
        Swal.fire({
          icon: 'success',
          title: 'Operación exitosa',
          text: "Admin creado exitosamente"
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
          text: "Admin eliminado exitosamente"
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
          text: "Admin editado exitosamente"
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
