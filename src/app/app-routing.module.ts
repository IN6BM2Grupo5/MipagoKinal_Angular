import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAppAdministradoresComponent } from './components/admin-app-administradores/admin-app-administradores.component';
import { AdminAppUsuariosComponent } from './components/admin-app-usuarios/admin-app-usuarios.component';
import { AdministracionAlumnosComponent } from './components/administracion-alumnos/administracion-alumnos.component';
import { AdministracionMarbetesComponent } from './components/administracion-marbetes/administracion-marbetes.component';
import { AdministracionPedidosComponent } from './components/administracion-pedidos/administracion-pedidos.component';
import { AdministracionProductosComponent } from './components/administracion-productos/administracion-productos.component';
import { CafeteriaAlumnosComponent } from './components/cafeteria-alumnos/cafeteria-alumnos.component';
import { CafeteriaPedidosComponent } from './components/cafeteria-pedidos/cafeteria-pedidos.component';
import { CafeteriaProductosComponent } from './components/cafeteria-productos/cafeteria-productos.component';
import { InicioAdminappComponent } from './components/inicio-adminapp/inicio-adminapp.component';
import { InicioAdministracionComponent } from './components/inicio-administracion/inicio-administracion.component';
import { InicioAlumnoComponent } from './components/inicio-alumno/inicio-alumno.component';
import { InicioCafeteriaComponent } from './components/inicio-cafeteria/inicio-cafeteria.component';
import { LoginComponent } from './components/login/login.component';
import { MarbeteComponent } from './components/marbete/marbete.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { UsuarioAdministracionComponent } from './components/usuario-administracion/usuario-administracion.component';
import { UsuarioCafeteriaComponent } from './components/usuario-cafeteria/usuario-cafeteria.component';
import { UsuarioCarritoCafeteriaComponent } from './components/usuario-carrito-cafeteria/usuario-carrito-cafeteria.component';
import { UsuarioCarritoComponent } from './components/usuario-carrito/usuario-carrito.component';
const routes: Routes = [

  { path: '', redirectTo: 'login',  pathMatch: 'full'},

  //Generales
  { path: 'login', component: LoginComponent},

  //Administrador Aplicacion
  { path: 'admin', children: [
    { path: 'inicio', component: InicioAdminappComponent},
    { path: 'usuarios', component: AdminAppUsuariosComponent},
    { path: 'administradores', component: AdminAppAdministradoresComponent},
  ]},

  //Usuario - Alumnos
  { path: 'usuario', children: [
    { path: 'inicio', component: InicioAlumnoComponent},
    { path: 'cafeteria', component: UsuarioCafeteriaComponent},
    { path: 'administracion', component: UsuarioAdministracionComponent},
    { path: 'carrito-administracion', component: UsuarioCarritoComponent},
    { path: 'carrito-cafeteria', component: UsuarioCarritoCafeteriaComponent},
    { path: 'perfil', component: PerfilComponent},
    { path: 'marbete', component: MarbeteComponent},
  ]},

  //Administrador - Administracion
  { path: 'administracion', children: [
    { path: 'inicio', component: InicioAdministracionComponent},
    { path: 'pedidos', component: AdministracionPedidosComponent},
    { path: 'alumnos', component: AdministracionAlumnosComponent},
    { path: 'productos', component: AdministracionProductosComponent},
    { path: 'marbetes', component: AdministracionMarbetesComponent},
  ]},

  //Administrador - Cafeteria
  { path: 'cafeteria', children: [
    { path: 'inicio', component: InicioCafeteriaComponent},
    { path: 'pedidos', component: CafeteriaPedidosComponent},
    { path: 'alumnos', component: CafeteriaAlumnosComponent},
    { path: 'productos', component: CafeteriaProductosComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
