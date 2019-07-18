import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Usuario } from 'src/app/modelos/usuario.model';
import { MiFireBaseService } from 'src/app/servicios/mi-fire-base.service';
import { diccionario } from '../../diccionario';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-listado-usuario-container',
  templateUrl: './listado-usuario-container.component.html',
  styleUrls: ['./listado-usuario-container.component.sass']
})
export class ListadoUsuarioContainerComponent implements OnInit, OnDestroy {
  public usuarios: Array<Usuario>;
  private _usuariosObs: Subscription;

  constructor(private _firebaseServ: MiFireBaseService) { }

  ngOnInit() {
    this.mostrar('todo');
  }

  ngOnDestroy() {
    this.destruirObservable();
  }

  private destruirObservable() {
    if (this._usuariosObs) {
      this._usuariosObs.unsubscribe();
    }
  }

  private obtenerListado() {
    return this._firebaseServ.obtenerDocumentosTodos(/* diccionario.db.usuarios */'usuarios')
      .pipe(
        map(retorno => {
          return retorno.map(a => {
            const data: Usuario = a.payload.doc.data() as Usuario;
            data.key = a.payload.doc.id;
            return data;
          });
        })
      );
  }

  public mostrar(filtro: string) {
    console.log('Mostraré solo los tipo', filtro);
    this.destruirObservable();
    this._usuariosObs = this.obtenerListado().subscribe((usuarios: Array<Usuario>) => {
      this.usuarios = usuarios;

      if (filtro !== 'todo') {
        this.usuarios = this.usuarios.filter((f: Usuario) => {
          // console.log(f.tipo === filtro);
          return f.tipo === filtro;
        });
      }
      console.log('En subscribe', this.usuarios);
    });
  }
}
