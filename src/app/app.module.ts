import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './shared/catalogo/components/search/search.component';
import { SchedaComponent } from './pages/scheda/scheda.component';
import { RisultatiComponent } from './pages/risultati/risultati.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './register/register.component';
import { ContattiComponent } from './pages/contatti/contatti.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
