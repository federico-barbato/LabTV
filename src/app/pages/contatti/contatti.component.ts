import { CommonModule } from '@angular/common';
import { Component, EventEmitter, NgModule, Output } from '@angular/core';

@Component({
  selector: 'app-contatti',
  templateUrl: './contatti.component.html',
  styleUrls: ['./contatti.component.scss']
})
export class ContattiComponent {

  // COMUNICAZIONE CON COMPONENTE GENITORE "HEADER"
  // CHIUSURA POPUP
  @Output() close = new EventEmitter();
}
 
/*================================================================
# MODULO COLLEGAMENTO TRA COMPONENTI
================================================================*/
@NgModule({
	declarations: [ContattiComponent],
	imports: [CommonModule],
  exports: [ContattiComponent],

})
export class ContattiModule {}

