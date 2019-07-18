import { Component, OnInit, OnChanges, Input, EventEmitter, Output } from '@angular/core';
import { Materia } from 'src/app/modelos/materia/materia.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Usuario } from 'src/app/modelos/usuario.model';

@Component({
  selector: 'app-modificar-materia-lazy',
  templateUrl: './modificar-materia-lazy.component.html',
  styleUrls: ['./modificar-materia-lazy.component.sass']
})
export class ModificarMateriaLazyComponent implements OnChanges {
  @Input() public materia: Materia;
  @Output() public enviarFormulario = new EventEmitter<Materia>();
  @Input() public profesores: Array<Usuario>;
  public form: FormGroup;

  ngOnChanges() {
    if (!this.form && this.profesores !== undefined && this.materia !== undefined) {
      this.form = new FormGroup({
        key: new FormControl(this.materia.key),
        nombre: new FormControl(this.materia.nombre, [Validators.required]),
        cuatrimestre: new FormControl(this.materia.cuatrimestre, [Validators.required, Validators.min(1)]),
        cupos: new FormControl(this.materia.cupos, [Validators.required, Validators.min(1)]),
        profesorCargo: new FormControl(this.materia.profesorCargo, [Validators.required]),
      });
    }
  }

  public registrar() {
    this.enviarFormulario.emit(this.form.value);
  }
}
