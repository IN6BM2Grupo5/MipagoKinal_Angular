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
  constructor(private _UsuariosService: UsuariosService) {   }

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

}
