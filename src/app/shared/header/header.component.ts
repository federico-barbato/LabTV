import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { LoginModule } from 'src/app/pages/login/login.component';
import { AuthService } from '../catalogo/services/auth.service';
import { RegisterModule } from "../../register/register.component";
import { ContattiModule } from "../../pages/contatti/contatti.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  mostraLogin: boolean = false;
  mostraRegister: boolean =false;
  mostraMenu: boolean = false;
  mostraContatti: boolean = false;
  constructor(public authService: AuthService) {}

  // FUNZIONE PER FAR SCOMPARIRE MODALE LOGIN E FAR APPARIRE MODALE REGISTER
  apriPopupRegister() {
    this.mostraLogin=false;
    this.mostraRegister=true;
  }
  // FUNZIONE PER FAR SCOMPARIRE MODALE REGISTER E FAR APPARIRE MODALE LOGIN
  apriPopupLogin() {
    this.mostraLogin=true;
    this.mostraRegister=false;
  }
}



/*================================================================
# MODULO COLLEGAMENTO TRA COMPONENTI
================================================================*/
@NgModule({
    declarations: [HeaderComponent],
    exports: [HeaderComponent],
    imports: [CommonModule, LoginModule, RegisterModule, ContattiModule]
})
export class HeaderModule {}
