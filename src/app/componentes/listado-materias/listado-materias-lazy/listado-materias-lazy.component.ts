import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Materia } from 'src/app/modelos/materia/materia.model';

@Component({
  selector: 'app-listado-materias-lazy',
  templateUrl: './listado-materias-lazy.component.html',
  styleUrls: ['./listado-materias-lazy.component.sass']
})
export class ListadoMateriasLazyComponent implements OnInit, OnChanges {
  @Input() public materias: Array<Materia>;
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges() {
    // console.log('En Changes', this.materias);
  }
}
