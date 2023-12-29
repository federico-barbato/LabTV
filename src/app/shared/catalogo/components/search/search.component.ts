import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  constructor(private router: Router) { }

  //FUNZIONE NECESSARIA ALLA RICERCA TRAMITE DENOMINZAIONE FILM RISULTATI PROVENIENTE DA API ESTERNA
  paginaDiRicerca() {
    const search: any = document.getElementById('search');
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['risultati', search.value])
    });
  }
}

/*================================================================
# MODULO COLLEGAMENTO TRA COMPONENTI
================================================================*/
@NgModule({
  declarations: [SearchComponent],
  imports: [CommonModule],
  exports: [SearchComponent],

})

export class SearchModule { }