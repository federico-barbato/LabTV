import { Component, EventEmitter, NgModule, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators, FormsModule, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/shared/catalogo/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  // COMUNICAZIONE CON COMPONENTE PADRE "HEADER PER CHIUSURA POPUP"
  @Output() close = new EventEmitter();
  // COMUNICAZIONE CON COMPONENTE PADRE "HEADER PER APERTURA POPUP"
  @Output() apriRegister = new EventEmitter();

  // CONTROLLO ORTOGRAFICO EMAIL E PASSWORD
  form: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });

  constructor(private formBuilder: FormBuilder, private authService: AuthService) {
  }
  // FUNZIONE PER EFFETTUARE IL LOGIN
  onSubmit() {
    this.authService.login(this.form.value.email, this.form.value.password).subscribe(data => {
      if (!data?.length) {
        // COMPARSA DI UN ALERT IN CASO DI UTENTE NON TROVATO
        alert("utente non trovato");
      }
      else {
        // CANCELLAZIONE PASSWORD ALL'INTERNO DEL DATA LOCALSTORAGE
        delete data[0].password;
        localStorage.setItem("utente", JSON.stringify(data));
        this.close.emit();
      }
    });
  }
  // VARIABILI PER VISUALIZZARE/NASCONDERE PASSWORD
  password: string = '';
  showPassword: boolean = false;
}


/*================================================================
# MODULO COLLEGAMENTO TRA COMPONENTI
================================================================*/
@NgModule({
  declarations: [LoginComponent],
  exports: [LoginComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule]
})
export class LoginModule { }
