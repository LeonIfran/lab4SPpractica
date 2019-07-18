import { Component, OnInit } from '@angular/core';
import { Materia } from 'src/app/modelos/materia/materia.model';
import { MiFireBaseService } from 'src/app/servicios/mi-fire-base.service';
import { Subscription } from 'rxjs';
import { diccionario } from '../../diccionario';
import { map } from 'rxjs/operators';
import { Usuario } from 'src/app/modelos/usuario.model';

@Component({
  selector: 'app-listado-materias-container',
  templateUrl: './listado-materias-container.component.html',
  styleUrls: ['./listado-materias-container.component.sass']
})
export class ListadoMateriasContainerComponent implements OnInit {

  public materias: Array<Materia>;
  private _materiasObs: Subscription;

  constructor(private _firebaseServ: MiFireBaseService) { }

  ngOnInit() {
    this._materiasObs = this.obtenerListado().subscribe(async (materias: Array<Materia>) => {
      this.materias = await this.manageList(materias);
      // console.log('En subscribe', materias);
    });
  }

  ngOnDestroy() {
    if (this._materiasObs) {
      this._materiasObs.unsubscribe();
    }
  }

  private obtenerListado() {
    return this._firebaseServ.obtenerDocumentosTodos(diccionario.db.materias)
      .pipe(
        map(retorno => {
          return retorno.map(a => {
            const data: Materia = a.payload.doc.data() as Materia;
            data.key = a.payload.doc.id;
            return data;
          });
        })
      );
  }

  private async manageList(materias: Array<Materia>) {
    const lista = new Array<Materia>();
    for (const materiaA of materias) {
      const profesor = ((await this._firebaseServ.obtenerDocumentoUID(diccionario.db.usuarios, materiaA.profesorCargo))
        .data()) as Usuario;

      if (profesor !== undefined) {
        const materiaB = materiaA;
        materiaB.profesorCargo = profesor.mail;

        lista.push(materiaB);
      }
      // console.log(profesor);
    }

    return lista;
  }
}
