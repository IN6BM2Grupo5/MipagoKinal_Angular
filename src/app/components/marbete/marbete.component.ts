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
  constructor(private _UsuariosService: UsuariosService) {
    this.identidad = this._UsuariosService.obtenerIdentidad();
   }

  ngOnInit(): void {
    this.identidad.correo = this.identidad.correo.replace("@kinal.edu.gt", "")

    this.getMarbete()
  }

  getMarbete(){
    this._UsuariosService.obtenerMarbete(this._UsuariosService.obtenerToken()).subscribe(
      (response) => {
          this.UsuariosModelGet = response.marbete;

          console.log(this.UsuariosModelGet)
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
