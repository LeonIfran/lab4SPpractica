import { Component, OnInit, OnChanges, Output, Input, EventEmitter } from '@angular/core';
import { Materia } from 'src/app/modelos/materia/materia.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-inscripcion-lazy',
  templateUrl: './inscripcion-lazy.component.html',
  styleUrls: ['./inscripcion-lazy.component.sass']
})
export class InscripcionLazyComponent implements OnChanges {
  @Output() public enviarFormulario = new EventEmitter<string>();
  @Input() public materias: Array<Materia>;
  public form: FormGroup;

  ngOnChanges() {
    if (!this.form && this.materias !== undefined) {
      this.form = new FormGroup({
        materia: new FormControl('', Validators.required),
      });
    }
  }

  public registrar() {
    this.enviarFormulario.emit(this.form.value);
  }

}
