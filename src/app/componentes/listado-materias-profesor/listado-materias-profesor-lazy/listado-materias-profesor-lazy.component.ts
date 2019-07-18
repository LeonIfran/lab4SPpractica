import { Component, OnInit } from '@angular/core';
import { Materia } from 'src/app/modelos/materia/materia.model';
import { MiFireBaseService } from 'src/app/servicios/mi-fire-base.service';
import { AuthService } from 'src/app/servicios/auth.service';
import { diccionario } from '../../diccionario';

@Component({
  selector: 'app-listado-materias-profesor-lazy',
  templateUrl: './listado-materias-profesor-lazy.component.html',
  styleUrls: ['./listado-materias-profesor-lazy.component.sass']
})
export class ListadoMateriasProfesorLazyComponent implements OnInit {


  constructor() { }

  ngOnInit() {

  }
}
