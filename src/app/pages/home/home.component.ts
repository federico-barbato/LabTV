import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { HeaderModule } from "../../shared/header/header.component";
import { CaroselloModule } from "../../shared/carosello/carosello.component";
import { CatalogoModule } from "../../shared/catalogo/catalogo.component";
import { ApiService } from '../../../app/shared/catalogo/services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  trendingFilms: any = [];
  page: number = 0;
  loading: boolean = false;
  films: any = [];
  tipo: string = 'film';


  constructor(private apiService: ApiService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {

    this.apiService.trendingFilms().subscribe((data: any) => {
      this.trendingFilms = data.results;
    });

    // CHIAMATA DELLA FUNZIONE PER IL CARICAMENTO "INFINITO" DELLA LISTA FILM 
    this.caricaAltro();
    // CONTROLLO SCROLL DELL'UTENTE : QUANDO ARRIVA VICINO ALLA FINE DELLA PAGINA CARICA ALTRI ARTICOLI  
    document.addEventListener('scroll', (event) => {
      if (window.scrollY + window.outerHeight >= document.body.scrollHeight) {
        // SISTEMA DI CONTROLLO PER EVITARE CHE I CARICAMENTI SI SOVRAPPONGANO 
        if (this.loading == false) this.caricaAltro();
      }
    })
  }
    // FUNZIONE CARICAMENTO "INFINITO" DELLA LISTA FILM 
  caricaAltro() {
    // INIZIO CARICAMENTO 
    this.loading = true;
    this.page++;

    if (this.tipo == 'film'){
      // CHIAMATA API ESTERNA 
    this.apiService.listaFilms(this.page + '').subscribe((response) => {
      for (let i = 0; i < response.results.length; i++) {
        // PUSH NECESSARIO PER INSERIRE I VALORI UNO AD UNO ALL'INTERNO DELL'ARRAY 
        this.films.push(response.results[i]);
      }
      // FINE CARICAMENTO
      this.loading = false;
    }); 
    }else {
      // CHIAMATA API ESTERNA 
    this.apiService.listaTelefilms(this.page + '').subscribe((response) => {
      for (let i = 0; i < response.results.length; i++) {
        // PUSH NECESSARIO PER INSERIRE I VALORI UNO AD UNO ALL'INTERNO DELL'ARRAY 
        this.films.push(response.results[i]);
      }
      // FINE CARICAMENTO
      this.loading = false;
    });
    }
    
  }

  cambio (tipo: string) {
    this.tipo= tipo;
    this.films =[];
    this.page = 0;
    this.caricaAltro();
  }
}

/*================================================================
# MODULO COLLEGAMENTO TRA COMPONENTI
================================================================*/
@NgModule({
  declarations: [HomeComponent],
  exports: [HomeComponent],
  imports: [CommonModule, HeaderModule, CaroselloModule, CatalogoModule]
})
export class HomeModule { }
