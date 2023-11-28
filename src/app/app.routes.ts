import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { AretesComponent } from './components/aretes/aretes.component';
import { AreteComponent } from './components/arete/arete.component';
import { BuscadorComponent } from './components/buscador/buscador.component';


const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'aretes', component: AretesComponent },
    { path: 'arete/:id', component: AreteComponent },
    { path: 'buscar/:termino', component: BuscadorComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }

]
export const app_routing = RouterModule.forRoot(APP_ROUTES);