import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Rutas
import { AppRoutingModule } from './app.routes';


// Componentes
import { AppComponent } from './app.component';
import { GridComponent } from './components/grid/grid.component';
import { GridPracticaComponent } from './components/grid-practica/grid-practica.component';
import { ElementsComponent } from './components/elements/elements.component';
import { ElementsPracticaComponent } from './components/elements-practica/elements-practica.component';
import { ComponentesComponent } from './components/componentes/componentes.component';

@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    GridPracticaComponent,
    ElementsComponent,
    ElementsPracticaComponent,
    ComponentesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
