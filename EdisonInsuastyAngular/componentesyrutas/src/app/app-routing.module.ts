import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './Modules/auth/login-page/login-page.component';
import { RegisterComponent } from './Modules/auth/register/register.component';
import { ValidationsComponent } from './Modules/auth/validations/validations.component';
import { MarcadoresComponent } from './Modules/favoritos/marcadores/marcadores.component';
import { HistoryComponent } from './Modules/history/history/history.component';
import { MenuComponent } from './Modules/history/menu/menu.component';
import { FooterComponent } from './Modules/home/footer/footer.component';
import { HeadersComponent } from './Modules/home/headers/headers.component';
import { TracklistComponent } from './Modules/tracks/tracklist/tracklist.component';
import { MycomponentComponent } from './mycomponent/mycomponent.component';

const routes: Routes = [
  {
    path:'',
    component: MycomponentComponent
  },
  {
    path:'Autenticacion',
    component:LoginPageComponent

  },
  {
    path:'Registro',
    component:RegisterComponent
        
  },

  {
    path:'Validacion',
    component:ValidationsComponent
        
  },

  {
    path: 'Marcadores',
    component:MarcadoresComponent
  },

  {
    path: 'Historial',
    component:HistoryComponent
  },

  {
    path: 'Menu',
    component:MenuComponent
  },

  {
    path: 'Footer',
    component:FooterComponent
  },

  {
    path: 'Header',
    component:HeadersComponent
  },

  {
    path: 'Tracklist',
    component:TracklistComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


//componenete login-page dentro del mudulo Auth