import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { InicioAlumnoComponent } from './components/inicio-alumno/inicio-alumno.component';
import { UsuarioCafeteriaComponent } from './components/usuario-cafeteria/usuario-cafeteria.component';
import { UsuarioAdministracionComponent } from './components/usuario-administracion/usuario-administracion.component';
import { UsuarioCarritoComponent } from './components/usuario-carrito/usuario-carrito.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { InicioCafeteriaComponent } from './components/inicio-cafeteria/inicio-cafeteria.component';
import { CafeteriaPedidosComponent } from './components/cafeteria-pedidos/cafeteria-pedidos.component';
import { CafeteriaAlumnosComponent } from './components/cafeteria-alumnos/cafeteria-alumnos.component';
import { CafeteriaProductosComponent } from './components/cafeteria-productos/cafeteria-productos.component';
import { InicioAdminappComponent } from './components/inicio-adminapp/inicio-adminapp.component';
import { AdminAppUsuariosComponent } from './components/admin-app-usuarios/admin-app-usuarios.component';
import { AdminAppAdministradoresComponent } from './components/admin-app-administradores/admin-app-administradores.component';
import { InicioAdministracionComponent } from './components/inicio-administracion/inicio-administracion.component';
import { AdministracionPedidosComponent } from './components/administracion-pedidos/administracion-pedidos.component';
import { AdministracionAlumnosComponent } from './components/administracion-alumnos/administracion-alumnos.component';
import { AdministracionProductosComponent } from './components/administracion-productos/administracion-productos.component';
import { UsuarioCarritoCafeteriaComponent } from './components/usuario-carrito-cafeteria/usuario-carrito-cafeteria.component';
import { MarbeteComponent } from './components/marbete/marbete.component';
import { AdministracionMarbetesComponent } from './components/administracion-marbetes/administracion-marbetes.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InicioAlumnoComponent,
    UsuarioCafeteriaComponent,
    UsuarioAdministracionComponent,
    UsuarioCarritoComponent,
    NavbarComponent,
    PerfilComponent,
    InicioCafeteriaComponent,
    CafeteriaPedidosComponent,
    CafeteriaAlumnosComponent,
    CafeteriaProductosComponent,
    InicioAdminappComponent,
    AdminAppUsuariosComponent,
    AdminAppAdministradoresComponent,
    InicioAdministracionComponent,
    AdministracionPedidosComponent,
    AdministracionAlumnosComponent,
    AdministracionProductosComponent,
    UsuarioCarritoCafeteriaComponent,
    MarbeteComponent,
    AdministracionMarbetesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
