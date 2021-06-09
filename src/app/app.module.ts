
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule }   from '@angular/forms';
//import { EshopComponent } from './eshop/eshop.component';
//import { ReportComponent } from './report/report.component';
//import { ProfileComponent } from './profile/profile.component';
import { JsonService } from './json.service';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { SucursalesComponent } from './sucursales/sucursales.component';
import { PuestosComponent } from './puestos/puestos.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { InventarioComponent } from './inventario/inventario.component';
import { GymComponent } from './gym/gym.component';
import { ClasesComponent } from './clases/clases.component';

const appRoutes: Routes = [
  //Definicion de los URLS para navegar en la Web
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'sucursales', component: SucursalesComponent },
  { path: 'puestos', component: PuestosComponent },
  { path: 'empleados', component: EmpleadosComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'inventario', component: InventarioComponent },
  { path: 'gym', component: GymComponent },

  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NotfoundComponent,
    SucursalesComponent,
    PuestosComponent,
    EmpleadosComponent,
    SidebarComponent,
    ServiciosComponent,
    InventarioComponent,
    GymComponent,
    ClasesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [JsonService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
