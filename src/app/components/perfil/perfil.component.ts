import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
  providers: [UsuariosService]
})
export class PerfilComponent implements OnInit {
  public identidad;
  constructor(private _UsuariosService: UsuariosService) {
    this.identidad = this._UsuariosService.obtenerIdentidad();
   }

  ngOnInit(): void {
    this.identidad.correo = this.identidad.correo.replace("@kinal.edu.gt", "")

    console.log(this.identidad)
  }

}
