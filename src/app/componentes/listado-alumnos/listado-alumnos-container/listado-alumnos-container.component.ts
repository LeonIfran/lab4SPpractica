import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/modelos/usuario.model';
import { Inscripcion } from 'src/app/modelos/inscripcion.model';
import { Materia } from 'src/app/modelos/materia/materia.model';
import { diccionario } from '../../diccionario';
import { MiFireBaseService } from 'src/app/servicios/mi-fire-base.service';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-listado-alumnos-container',
  templateUrl: './listado-alumnos-container.component.html',
  styleUrls: ['./listado-alumnos-container.component.sass']
})
export class ListadoAlumnosContainerComponent implements OnInit {

  public listado: Array<Usuario>;

  constructor(private _firebaseServ: MiFireBaseService, private _authServ: AuthService) { }

  ngOnInit() {
    this._firebaseServ.obtenerDocumentosFiltro(diccionario.db.materias, 'profesorCargo', this._authServ.user.key)
      .then((materias: Array<Materia>) => {
        this.buscarAlumnos(materias).then(listado => {
          this.listado = listado;
        });
      });
  }

  private async buscarAlumnos(materias: Array<Materia>) {
    const listaAlumnos = new Array<Usuario>();

    for (const materiaA of materias) {
      const listaMateria: Array<Inscripcion> = await this._firebaseServ.obtenerDocumentosFiltro(diccionario.db.inscripciones, 'materia', materiaA.key);

      for (const inscripcion of listaMateria) {

        const alumnoInscripto: Usuario = (await this._firebaseServ.obtenerDocumentoUID(diccionario.db.usuarios, inscripcion.alumno)).data() as Usuario;

        if (alumnoInscripto !== undefined) {
          alumnoInscripto.key = inscripcion.alumno;
          if (this.verificarAlumno(listaAlumnos, alumnoInscripto)) {
            listaAlumnos.push(alumnoInscripto);
          }
        }
      }
    }

    return listaAlumnos;
  }

  private verificarAlumno(listaAlumnos: Array<Usuario>, usuario: Usuario) {
    let auxReturn = true;

    for (const alumnoA of listaAlumnos) {
      if (alumnoA.mail === usuario.mail) {
        auxReturn = false;
      }
    }

    return auxReturn;
  }

}
