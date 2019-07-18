import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {diccionario} from 'src/app/componentes/diccionario';
import { Usuario } from 'src/app/modelos/usuario.model';
import { AuthService } from 'src/app/servicios/auth.service';
import { MiFireBaseService } from 'src/app/servicios/mi-fire-base.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-container',
  templateUrl: './registrar-container.component.html',
  styleUrls: ['./registrar-container.component.sass']
})
export class RegistrarContainerComponent implements OnInit {

 
  constructor(private _authServ: AuthService, private _firebaseServ: MiFireBaseService, private _router: Router) { }
  public registrar(event: Usuario) {
    // console.log('Event en Container', event);

    this._firebaseServ.agregarDocumento(diccionario.db.usuarios, { mail: event.mail, tipo: event.tipo })
      .then((result) => {
        if (result) {
          this._authServ.crear(event.mail, event.clave)
            .then((user) => {
              // console.log('Registro completo');
              this._router.navigate(['login']);
            })
            .catch((err) => {
              console.log('Error en Container Component', err);
            });
        }
      })
      .catch((err) => {
        console.log('Error en Container Component', err);
      });
  }
  ngOnInit() {}

}
