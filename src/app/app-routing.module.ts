import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './components/formulario/formulario.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { TurnosComponent } from './components/turnos/turnos.component';

const routes: Routes = [
  {path : 'home', component : HomeComponent},
  {path : '', redirectTo: '/home' , pathMatch: 'full'},
  {path : 'contacto', component : FormularioComponent},
  {path : 'register', component : RegisterComponent},
  {path : 'login', component : LoginComponent},
  {path : 'turnos', component : TurnosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,]
})
export class AppRoutingModule { }
