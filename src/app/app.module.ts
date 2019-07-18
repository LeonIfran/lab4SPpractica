import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrarContainerComponent } from './componentes/registro/registrar-container/registrar-container.component';
import { RegistrarLazyComponent } from './componentes/registro/registrar-lazy/registrar-lazy.component';

//forms
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

//Firebase
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireStorageModule} from 'angularfire2/storage';
import { AngularFirestore } from 'angularfire2/firestore';
import { environment } from 'src/environments/environment.prod';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { LoginLazyComponent } from './componentes/login/login-lazy/login-lazy.component';
import { LoginContainerComponent } from './componentes/login/login-container/login-container.component';
import { HomeAdminComponent } from './componentes/home-admin/home-admin.component';
import { HomeAlumnoComponent } from './componentes/home-alumno/home-alumno.component';
import { HomeProfesorComponent } from './componentes/home-profesor/home-profesor.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { AltaMateriaContainerComponent } from './componentes/alta-materia/alta-materia-container/alta-materia-container.component';
import { AltaMateriaLazyComponent } from './componentes/alta-materia/alta-materia-lazy/alta-materia-lazy.component';
import { InscripcionLazyComponent } from './componentes/inscripcion/inscripcion-lazy/inscripcion-lazy.component';
import { InscripcionContainerComponent } from './componentes/inscripcion/inscripcion-container/inscripcion-container.component';
import { ListadoAlumnosLazyComponent } from './componentes/listado-alumnos/listado-alumnos-lazy/listado-alumnos-lazy.component';
import { ListadoAlumnosContainerComponent } from './componentes/listado-alumnos/listado-alumnos-container/listado-alumnos-container.component';
import { ListadoMateriasLazyComponent } from './componentes/listado-materias/listado-materias-lazy/listado-materias-lazy.component';
import { ListadoMateriasContainerComponent } from './componentes/listado-materias/listado-materias-container/listado-materias-container.component';
import { ListadoMateriasAlumnoContainerComponent } from './componentes/listado-materias-alumno/listado-materias-alumno-container/listado-materias-alumno-container.component';
import { ListadoMateriasAlumnoLazyComponent } from './componentes/listado-materias-alumno/listado-materias-alumno-lazy/listado-materias-alumno-lazy.component';
import { ListadoMateriasProfesorLazyComponent } from './componentes/listado-materias-profesor/listado-materias-profesor-lazy/listado-materias-profesor-lazy.component';
import { ListadoMateriasProfesorContainerComponent } from './componentes/listado-materias-profesor/listado-materias-profesor-container/listado-materias-profesor-container.component';
import { ListadoUsuarioLazyComponent } from './componentes/listado-usuarios/listado-usuario-lazy/listado-usuario-lazy.component';
import { ListadoUsuarioContainerComponent } from './componentes/listado-usuarios/listado-usuario-container/listado-usuario-container.component';
import { MensajesContainerComponent } from './componentes/mensajes/mensajes-container/mensajes-container.component';
import { MensajesLazyComponent } from './componentes/mensajes/mensajes-lazy/mensajes-lazy.component';
import { ModificarMateriaLazyComponent } from './componentes/modificar-materia/modificar-materia-lazy/modificar-materia-lazy.component';
import { ModificarMateriaContainerComponent } from './componentes/modificar-materia/modificar-materia-container/modificar-materia-container.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrarContainerComponent,
    RegistrarLazyComponent,
    LoginLazyComponent,
    LoginContainerComponent,
    HomeAdminComponent,
    HomeAlumnoComponent,
    HomeProfesorComponent,
    MenuComponent,
    AltaMateriaContainerComponent,
    AltaMateriaLazyComponent,
    InscripcionLazyComponent,
    InscripcionContainerComponent,
    ListadoAlumnosLazyComponent,
    ListadoAlumnosContainerComponent,
    ListadoMateriasLazyComponent,
    ListadoMateriasContainerComponent,
    ListadoMateriasAlumnoContainerComponent,
    ListadoMateriasAlumnoLazyComponent,
    ListadoMateriasProfesorLazyComponent,
    ListadoMateriasProfesorContainerComponent,
    ListadoUsuarioLazyComponent,
    ListadoUsuarioContainerComponent,
    MensajesContainerComponent,
    MensajesLazyComponent,
    ModificarMateriaLazyComponent,
    ModificarMateriaContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
