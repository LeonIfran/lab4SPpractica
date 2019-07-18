import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { Usuario } from 'src/app/modelos/usuario.model';

@Component({
  selector: 'app-listado-usuario-lazy',
  templateUrl: './listado-usuario-lazy.component.html',
  styleUrls: ['./listado-usuario-lazy.component.sass']
})
export class ListadoUsuarioLazyComponent implements OnInit , OnChanges {
  @Input() public usuarios: Array<Usuario>;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    // console.log('En Changes', this.usuarios);
  }
}
