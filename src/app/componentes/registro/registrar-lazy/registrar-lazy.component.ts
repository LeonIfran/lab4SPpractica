import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Usuario } from 'src/app/modelos/usuario.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { diccionario } from 'src/app/componentes/diccionario';

@Component({
  selector: 'app-registrar-lazy',
  templateUrl: './registrar-lazy.component.html',
  styleUrls: ['./registrar-lazy.component.sass']
})
export class RegistrarLazyComponent implements OnInit {
  @Output() public enviarFormulario = new EventEmitter<Usuario>();
  public form: FormGroup;
  public tipos;
  constructor() { }

  ngOnInit() {
    this.tipos = new Array<string>(diccionario.tipos.alumno, diccionario.tipos.admin, diccionario.tipos.profesor);
    this.form = new FormGroup({
      mail: new FormControl('', [Validators.required, Validators.email]),
      clave: new FormControl('', [Validators.required, Validators.minLength(6)]),
      tipo: new FormControl(this.tipos[0], [Validators.required]),
    });
  }
  public registrar() {
    this.enviarFormulario.emit(this.form.value);
  }
}
