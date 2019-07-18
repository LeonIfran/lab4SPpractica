import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/modelos/usuario.model';
import { MiFireBaseService } from 'src/app/servicios/mi-fire-base.service';
import { Router } from '@angular/router';
import { diccionario } from '../../diccionario';
import { Materia } from 'src/app/modelos/materia/materia.model';

@Component({
  selector: 'app-alta-materia-container',
  templateUrl: './alta-materia-container.component.html',
  styleUrls: ['./alta-materia-container.component.sass']
})
export class AltaMateriaContainerComponent implements OnInit {
  public profesores: Array<Usuario>;
  // tslint:disable-next-line: variable-name
  private _mensaje = '';

  // tslint:disable-next-line: variable-name
  constructor(private _firebaseServ: MiFireBaseService, private _router: Router) { }

  async ngOnInit() {
    this._firebaseServ.obtenerDocumentosFiltro(diccionario.db.usuarios, 'tipo', diccionario.tipos.profesor).then((documentos) => {
      // console.log(documentos);
      this.profesores = documentos as Array<Usuario>;
    });
  }

  public agregarMateria(event: Materia) {
    // console.log(event);

    this._firebaseServ.agregarDocumento(diccionario.db.materias, event)
      .then((result) => {
        this._router.navigate(['home-admin']);
        /* if (result) {
          this.mostrarMensaje('Materia añadida.');
        } */
      })
      .catch((err) => {
        this.mostrarMensaje('Error al agregar a la base de datos.');
        console.log('Error en Container Component', err);
      });
  }

  private mostrarMensaje(mensaje: string) {
    this._mensaje = mensaje;
    setTimeout(() => { this._mensaje = ''; }, 5000);
  }
}
