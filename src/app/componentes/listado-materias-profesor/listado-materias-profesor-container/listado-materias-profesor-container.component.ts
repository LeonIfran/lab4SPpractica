import { Component, OnInit } from '@angular/core';
import { Materia } from 'src/app/modelos/materia/materia.model';
import { MiFireBaseService } from 'src/app/servicios/mi-fire-base.service';
import { AuthService } from 'src/app/servicios/auth.service';
import { diccionario } from '../../diccionario';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-listado-materias-profesor-container',
  templateUrl: './listado-materias-profesor-container.component.html',
  styleUrls: ['./listado-materias-profesor-container.component.sass']
})
export class ListadoMateriasProfesorContainerComponent implements OnInit {

  public materias: Array<Materia>;

  constructor(private _firebaseServ: MiFireBaseService, private _authServ: AuthService) { }

  ngOnInit() {
    this._firebaseServ.obtenerDocumentosFiltro(diccionario.db.materias, 'profesorCargo', this._authServ.user.key)
      .then((materias: Array<Materia>) => {
        this.materias = materias;
      });
  }
}
