import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GridComponent } from './components/grid/grid.component';
import { GridPracticaComponent } from './components/grid-practica/grid-practica.component';
import { ElementsComponent } from './components/elements/elements.component';
import { ElementsPracticaComponent } from './components/elements-practica/elements-practica.component';
import { ComponentesComponent } from './components/componentes/componentes.component';
import { FormsComponent } from './components/forms/forms.component';

const routes: Routes = [
    { path: 'grid', component: GridComponent},
    { path: 'grid-practica', component: GridPracticaComponent},
    { path: 'elements', component: ElementsComponent},
    { path: 'elements-practica', component: ElementsPracticaComponent},
    { path: 'componentes', component: ComponentesComponent},
    { path: 'forms', component: FormsComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
