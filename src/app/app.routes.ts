//importar modulos del router de angular
import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';//este yo no lo estoy ocupando.

import {
		LoginComponent, 
		AdministradorComponent,
		DireccionComponent,
		TecnicoComponent,
		MenuComponent,
		RmunicipiozonaComponent,
		ReportellamadasComponent,
		ReporteComponent,
		ProductoresComponent,
		EncuestasComponent,
		TecnicoreporteComponent
 } from "./componentes/index.paginas";


const app_routes: Routes =[
	{ path: '', component: LoginComponent  },
	{ path: 'menu', component: MenuComponent  },
	{ path: 'administrador', component: AdministradorComponent  },	
	{ path: 'direccion', component: DireccionComponent  },
	{ path: 'tecnico', component: TecnicoComponent  },
	{ path: 'reporte_municipio', component: RmunicipiozonaComponent },
	{ path: 'reporte_llamadas', component: ReportellamadasComponent },
	{ path: 'reporte', component: ReporteComponent },
	{ path: 'productores', component: ProductoresComponent },
	{ path: 'encuestas', component: EncuestasComponent },
	{ path: 'tecnico_reporte', component: TecnicoreporteComponent },

	{ path: '**',pathMatch: 'full', redirectTo:'' }
] 

export const servicioRuta: any[] = [];
export const app_routing: ModuleWithProviders = RouterModule.forRoot(app_routes, { useHash : true} );