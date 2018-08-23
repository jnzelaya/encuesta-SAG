import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

//rutas
import { app_routing, servicioRuta } from "./app.routes"


//compponentes
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { AdministradorComponent } from './componentes/administrador/administrador.component';
import { TecnicoComponent } from './componentes/tecnico/tecnico.component';
import { DireccionComponent } from './componentes/direccion/direccion.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { RmunicipiozonaComponent } from './componentes/rmunicipiozona/rmunicipiozona.component';
import { ReportellamadasComponent } from './componentes/reportellamadas/reportellamadas.component';
import { ReporteComponent } from './componentes/reporte/reporte.component';
import { ProductoresComponent } from './componentes/productores/productores.component';
import { EncuestasComponent } from './componentes/encuestas/encuestas.component';
import { TecnicoreporteComponent } from './componentes/tecnicoreporte/tecnicoreporte.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdministradorComponent,
    TecnicoComponent,
    DireccionComponent,
    MenuComponent,
    RmunicipiozonaComponent,
    ReportellamadasComponent,
    ReporteComponent,
    ProductoresComponent,
    EncuestasComponent,
    TecnicoreporteComponent
  ],
  imports: [
    BrowserModule,
    app_routing,
    FormsModule
  ],
  providers: [
  servicioRuta
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
