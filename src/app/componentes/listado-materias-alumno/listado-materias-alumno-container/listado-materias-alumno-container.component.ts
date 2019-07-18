import { Component, OnInit, OnDestroy } from '@angular/core';
import { map } from 'rxjs/operators';
import { Materia } from 'src/app/modelos/materia/materia.model';
import { Subscription } from 'rxjs';
import { MiFireBaseService } from 'src/app/servicios/mi-fire-base.service';
import { AuthService } from 'src/app/servicios/auth.service';
import { Inscripcion } from 'src/app/modelos/inscripcion.model';
import { diccionario } from '../../diccionario';
import { Usuario } from 'src/app/modelos/usuario.model';

@Component({
  selector: 'app-listado-materias-alumno-container',
  templateUrl: './listado-materias-alumno-container.component.html',
  styleUrls: ['./listado-materias-alumno-container.component.sass']
})
export class ListadoMateriasAlumnoContainerComponent implements OnInit, OnDestroy {
  public materias: Array<Materia>;
  // tslint:disable-next-line: variable-name
  private _inscripcionObs: Subscription;

  // tslint:disable-next-line: variable-name
  constructor(private _firebaseServ: MiFireBaseService, private _authServ: AuthService) { }

  ngOnInit() {
    this._inscripcionObs = this.obtenerListado().subscribe((inscripciones: Array<Inscripcion>) => {
      const inscripcionesFiltradas: Array<Inscripcion> = inscripciones.filter((f: Inscripcion) => {
        // console.log(f.tipo === filtro);
        return f.alumno === this._authServ.user.key;
      });

      this.manageLista(inscripcionesFiltradas).then((result) => {
        this.materias = result;
      });
    });
  }

  ngOnDestroy() {
    if (this._inscripcionObs) {
      this._inscripcionObs.unsubscribe();
    }
  }

  private obtenerListado() {
    return this._firebaseServ.obtenerDocumentosTodos(diccionario.db.inscripciones)
      .pipe(
        map(retorno => {
          return retorno.map(a => {
            const data: Inscripcion = a.payload.doc.data() as Inscripcion;
            data.key = a.payload.doc.id;
            return data;
          });
        })
      );
  }

  private async manageLista(inscripciones: Array<Inscripcion>) {
    // console.log(inscripciones);
    const lista = new Array<any>();
    for (const inscripcionA of inscripciones) {
      const materia: any = ((await this._firebaseServ.obtenerDocumentoUID(diccionario.db.materias, inscripcionA.materia))
        .data()) as Materia;

      if (materia !== undefined) {
        materia.key = inscripcionA.materia;
        const profesor = ((await this._firebaseServ.obtenerDocumentoUID(diccionario.db.usuarios, materia.profesorCargo)).data()) as Usuario;

        if (profesor !== undefined) {
          materia.profesorKey = materia.profesorCargo;
          materia.profesorCargo = profesor.mail;
          lista.push(materia);
        }
      }
      // console.log(profesor);
    }

    return lista;
  }

}
