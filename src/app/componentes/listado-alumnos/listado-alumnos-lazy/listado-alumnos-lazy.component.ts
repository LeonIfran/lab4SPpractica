import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { MiFireBaseService } from 'src/app/servicios/mi-fire-base.service';
import { Usuario } from 'src/app/modelos/usuario.model';

@Component({
  selector: 'app-listado-alumnos-lazy',
  templateUrl: './listado-alumnos-lazy.component.html',
  styleUrls: ['./listado-alumnos-lazy.component.sass']
})
export class ListadoAlumnosLazyComponent implements OnChanges {
  @Input() public usuarios: Array<Usuario>;

  constructor(public authServ: MiFireBaseService) { }

  ngOnChanges() {
    // console.log(this.usuarios);
  }
}
