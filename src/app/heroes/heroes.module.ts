import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],
    exports: [
        ListadoComponent,
        HeroeComponent
    ],
    imports: [
        /**En esta seccion unicamente se importan modulos */
        CommonModule
    ]
})
export class HeroesModule{

}