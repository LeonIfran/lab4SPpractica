import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';
import { Materia } from 'src/app/modelos/materia/materia.model';

@Component({
  selector: 'app-listado-materias-alumno-lazy',
  templateUrl: './listado-materias-alumno-lazy.component.html',
  styleUrls: ['./listado-materias-alumno-lazy.component.sass']
})
export class ListadoMateriasAlumnoLazyComponent implements OnChanges {
  @Input() public materias: Array<any>;
  constructor(public authServ: AuthService) { }

  ngOnChanges() {
    // console.log(this.materias);
  }

}
