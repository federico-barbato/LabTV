import { CommonModule } from '@angular/common';
import { Component, Input, NgModule } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  // IMPORTAZIONE ELEMENTI CONTENUTI IN ARRAY DENOMINATO "ELEMENTO"
 @Input() elemento:any;
 @Input() tipo: string = 'film';
}


/*================================================================
# MODULO COLLEGAMENTO TRA COMPONENTI
================================================================*/
@NgModule({
	declarations: [CardComponent],
	imports: [CommonModule],
  exports: [CardComponent],

})
export class CardModule {}