import { Component, OnInit, OnChanges, Output, Input, EventEmitter } from '@angular/core';
import { Materia } from 'src/app/modelos/materia/materia.model';
import { Usuario } from 'src/app/modelos/usuario.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-alta-materia-lazy',
  templateUrl: './alta-materia-lazy.component.html',
  styleUrls: ['./alta-materia-lazy.component.sass']
})
export class AltaMateriaLazyComponent implements OnChanges {
  @Output() public enviarFormulario = new EventEmitter<Materia>();
  @Input() public profesores: Array<Usuario>;
  public form: FormGroup;


  ngOnChanges() {
    if (!this.form && this.profesores !== undefined) {
      this.form = new FormGroup({
        nombre: new FormControl('', [Validators.required]),
        cuatrimestre: new FormControl(0, [Validators.required, Validators.min(1)]),
        cupos: new FormControl(0, [Validators.required, Validators.min(1)]),
        profesorCargo: new FormControl('', [Validators.required]),
      });

      this.form.patchValue({ profesorCargo: this.profesores[0].key });
    }
  }

  public registrar() {
    this.enviarFormulario.emit(this.form.value);
  }

}
