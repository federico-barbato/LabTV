import { CommonModule } from '@angular/common';
import { Component, EventEmitter, NgModule, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../shared/catalogo/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent {

  mostraRegister: boolean = false;

  @Output() close = new EventEmitter();
  @Output() tornaLogin = new EventEmitter();

  form: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });

  constructor(private formBuilder: FormBuilder, private authService: AuthService) {
  }

  onSubmit() {
    if (this.form.status === 'INVALID'){
      alert ("email o password non valide");
      return;
    }

    this.authService.register(this.form.value.email, this.form.value.password).subscribe(data => {
      if (!data) {
        alert("utente non registrato");
      }
      else {
        this.authService.login(this.form.value.email, this.form.value.password).subscribe(data => {
          if (!data?.length) {
            alert("utente non trovato");
          }
          else {
            delete data[0].password;
            localStorage.setItem("utente", JSON.stringify(data));
            this.close.emit();
          }
        });
      }
    });
  }

  password: string = '';
  showPassword: boolean = false;

}


/*================================================================
# MODULO COLLEGAMENTO TRA COMPONENTI
================================================================*/
@NgModule({
  declarations: [RegisterComponent],
  exports: [RegisterComponent],
  imports: [CommonModule, ReactiveFormsModule]
})
export class RegisterModule { }


