import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicios/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent {

  constructor(public authServ: AuthService, private _router: Router) { }

  public desloguear() {
    this.authServ.logOff().then(() => {
      this._router.navigate(['login']);
    });
  }
}
