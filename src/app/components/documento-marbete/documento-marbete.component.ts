import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-documento-marbete',
  templateUrl: './documento-marbete.component.html',
  styleUrls: ['./documento-marbete.component.scss']
})
export class DocumentoMarbeteComponent implements OnInit {
  public identidad;
  constructor(private _UsuariosService: UsuariosService) {
   }

  ngOnInit(): void {
    this.getIdentidad()
  }

  getIdentidad() {
    this._UsuariosService.obtenerAlumnoId(this._UsuariosService.obtenerIdentidad()._id, this._UsuariosService.obtenerToken()).subscribe(
      (response) => {
          this.identidad = response.usuario;
          this.identidad.correo = this.identidad.correo.replace("@kinal.edu.gt", "")
          console.log(response.usuario)
      },
      (error) => {
      }
    )
  }
    printPage() {
			window.print();
  }

}
