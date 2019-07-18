import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-lazy',
  templateUrl: './login-lazy.component.html',
  styleUrls: ['./login-lazy.component.sass']
})
export class LoginLazyComponent implements OnInit {
  @Output() public enviarFormulario = new EventEmitter<{ mail: string, clave: string }>();
  public form: FormGroup;
  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      mail: new FormControl('', [Validators.required, Validators.email]),
      clave: new FormControl('', [Validators.required, Validators.minLength(6)]),
    });
  }
  public loguear() {
    this.enviarFormulario.emit(this.form.value);
  }

}
