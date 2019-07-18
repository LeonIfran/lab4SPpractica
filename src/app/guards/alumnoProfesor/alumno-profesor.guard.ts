import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/servicios/auth.service';
import { diccionario } from 'src/app/componentes/diccionario';

@Injectable({
  providedIn: 'root'
})
export class AlumnoProfesorGuard implements CanActivate {
  // tslint:disable-next-line: variable-name
  constructor(private _authServ: AuthService, private _router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let auxReturn = false;

    if (this._authServ.user.tipo !== diccionario.tipos.admin) {
      auxReturn = true;
    } else {
      this._router.navigate(['home-admin']);
    }

    return auxReturn;
  }
}