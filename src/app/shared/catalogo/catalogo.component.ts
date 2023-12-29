import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, NgModule, Output} from '@angular/core';
import { CardModule } from "./components/card/card.component";
import { SearchModule } from "./components/search/search.component";

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.scss']
})

export class CatalogoComponent{
 @Input() films: any=[];
 @Input() tipo:string = 'film';
 @Output() cambioTipo = new EventEmitter();
}


/*================================================================
# MODULO COLLEGAMENTO TRA COMPONENTI
================================================================*/
@NgModule({
    declarations: [CatalogoComponent],
    exports: [CatalogoComponent],
    imports: [CommonModule, CardModule, SearchModule]
})
export class CatalogoModule { }