import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, EventEmitter, Input, NgModule, Output} from '@angular/core';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-carosello',
  templateUrl: './carosello.component.html',
  styleUrls: ['./carosello.component.scss']
})

export class CaroselloComponent {
  @Input() heightLimit: boolean = false;
  @Input() elementi: any =[];
  @Input() tipo:string = 'film';
}

/*================================================================
# MODULO COLLEGAMENTO TRA COMPONENTI
================================================================*/
@NgModule({
  declarations: [CaroselloComponent],
  imports: [CommonModule],
  exports: [CaroselloComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],


})
export class CaroselloModule { }
