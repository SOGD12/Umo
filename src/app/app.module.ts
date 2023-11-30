import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AretesService } from './service/aretes.service';

//Routes  
import { app_routing } from './app.routes';

//Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { AretesComponent } from './components/aretes/aretes.component';
import { AreteComponent } from './components/arete/arete.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { AreteTarjetaComponent } from './components/arete-tarjeta/arete-tarjeta.component';
import { CollaresComponent } from './components/collares/collares.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    AretesComponent,
    AreteComponent,
    BuscadorComponent,
    AreteTarjetaComponent,
    CollaresComponent,
  ],
  imports: [
    BrowserModule,
    app_routing
  ],
  providers: [AretesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
