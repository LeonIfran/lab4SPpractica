import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrarContainerComponent } from './componentes/registro/registrar-container/registrar-container.component';
import { LoginContainerComponent } from './componentes/login/login-container/login-container.component';
import { HomeAlumnoComponent } from './componentes/home-alumno/home-alumno.component';

//guards
import { LoggedGuard } from './guards/logged/logged.guard';
import { AlumnoGuard } from './guards/alumno/alumno.guard';
import { AdminGuard } from './guards/admin/admin.guard';
import { ProfesorGuard } from './guards/profesor/profesor.guard';
import { AlumnoProfesorGuard } from './guards/alumnoProfesor/alumno-profesor.guard';

import { InscripcionContainerComponent } from './componentes/inscripcion/inscripcion-container/inscripcion-container.component';

import { HomeAdminComponent } from './componentes/home-admin/home-admin.component';
import { AltaMateriaContainerComponent } from './componentes/alta-materia/alta-materia-container/alta-materia-container.component';
import { ModificarMateriaContainerComponent } from './componentes/modificar-materia/modificar-materia-container/modificar-materia-container.component';
import { HomeProfesorComponent } from './componentes/home-profesor/home-profesor.component';
import { ListadoAlumnosContainerComponent } from './componentes/listado-alumnos/listado-alumnos-container/listado-alumnos-container.component';
import { ListadoUsuarioContainerComponent } from './componentes/listado-usuarios/listado-usuario-container/listado-usuario-container.component';
import { MensajesContainerComponent } from './componentes/mensajes/mensajes-container/mensajes-container.component';


const routes: Routes = [
  { path: 'registro', component: RegistrarContainerComponent },
  { path: 'login', component: LoginContainerComponent },
  { path: 'home-alumno', component: HomeAlumnoComponent, canActivate: [LoggedGuard, AlumnoGuard] },
  { path: 'inscripcion', component: InscripcionContainerComponent, canActivate: [LoggedGuard, AlumnoGuard] },
  { path: 'home-admin', component: HomeAdminComponent, canActivate: [LoggedGuard, AdminGuard] },
  { path: 'alta-materia', component: AltaMateriaContainerComponent, canActivate: [LoggedGuard, AdminGuard] },
  { path: 'modificar-materia/:id', component: ModificarMateriaContainerComponent, canActivate: [LoggedGuard, AdminGuard] },
  { path: 'listado-usuarios', component: ListadoUsuarioContainerComponent, canActivate: [LoggedGuard, AdminGuard] },
  { path: 'home-profesor', component: HomeProfesorComponent, canActivate: [LoggedGuard, ProfesorGuard] },
  { path: 'listado-alumnos', component: ListadoAlumnosContainerComponent, canActivate: [LoggedGuard, ProfesorGuard] },
  { path: 'mensajes/:profesor/:alumno', component: MensajesContainerComponent, canActivate: [LoggedGuard, AlumnoProfesorGuard] },
  { path: '', redirectTo: '/home-alumno', pathMatch: 'full' },
  { path: '**', redirectTo: '/home-alumno', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
