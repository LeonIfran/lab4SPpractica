import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { Mensaje } from 'src/app/modelos/mensaje/mensaje.model';
import { AuthService } from 'src/app/servicios/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-mensajes-lazy',
  templateUrl: './mensajes-lazy.component.html',
  styleUrls: ['./mensajes-lazy.component.sass']
})
export class MensajesLazyComponent implements OnChanges {
  @Input() public mensajes: Array<Mensaje>;
  @Output() public enviarMensaje = new EventEmitter<Mensaje>();
  public form;

  constructor(public authServ: AuthService) { }

  ngOnChanges() {
    // console.log(this.mensajes);
    if (this.mensajes !== undefined) {
      this.form = new FormGroup({
        mensaje: new FormControl('', [Validators.required]),
        emisor: new FormControl(this.authServ.user.key, Validators.required),
      });
    }
  }

  public enviar() {
    this.enviarMensaje.emit(this.form.value);
  }
}

