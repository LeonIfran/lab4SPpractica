import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/servicios/auth.service';
import { diccionario } from 'src/app/componentes/diccionario';


@Injectable({
  providedIn: 'root'
})
export class AlumnoGuard implements CanActivate {
  constructor(private _authServ: AuthService, private _router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let auxReturn = false;

    switch (this._authServ.user.tipo) {
      case diccionario.tipos.alumno: {
        auxReturn = true;
        break;
      }
      case diccionario.tipos.admin: {
        this._router.navigate(['home-admin']);
        break;
      }
      default: {
        this._router.navigate(['home-profesor']);
        break;
      }
    }

    return auxReturn;
  }
}
