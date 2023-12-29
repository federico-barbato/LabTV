import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { HeaderModule } from "../../shared/header/header.component";
import { ApiService } from '../../../app/shared/catalogo/services/api.service';
import { ActivatedRoute } from '@angular/router';
import { CardModule } from "../../shared/catalogo/components/card/card.component";
import { CatalogoModule } from "../../shared/catalogo/catalogo.component";

@Component({
  selector: 'app-risultati',
  templateUrl: './risultati.component.html',
  styleUrls: ['./risultati.component.scss']
})
export class RisultatiComponent {
  films: any = [];

  
  constructor(private apiService: ApiService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const search:any = this.route.snapshot.paramMap.get('search');
    this.apiService.risultsFilms(search).subscribe((data: any) => {
      this.films = data.results;
    });
  }
}


/*================================================================
# MODULO COLLEGAMENTO TRA COMPONENTI
================================================================*/
@NgModule({
    declarations: [RisultatiComponent],
    exports: [RisultatiComponent],
    imports: [CommonModule, HeaderModule, CardModule, CatalogoModule]
})
export class RisultatiModule { }
