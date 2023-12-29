import { Component, NgModule, OnInit } from '@angular/core';
import { CaroselloModule } from "../../shared/carosello/carosello.component";
import { CommonModule } from '@angular/common';
import { ApiService } from '../../shared/catalogo/services/api.service';
import { ActivatedRoute } from '@angular/router';
import { HeaderModule } from "../../shared/header/header.component";
import { DomSanitizer } from '@angular/platform-browser';
import { AuthService } from 'src/app/shared/catalogo/services/auth.service';




@Component({
  selector: 'app-scheda',
  templateUrl: './scheda.component.html',
  styleUrls: ['./scheda.component.scss']
})

export class SchedaComponent implements OnInit {
  film: any = null;
  loaded: boolean = false;
  similarFilms: any = [];
  video: any = [];

  constructor(private apiService: ApiService, private route: ActivatedRoute, public sanitizer: DomSanitizer, public authService: AuthService) {
  }

  ngOnInit(): void {
    // PRELIEVO VALORE ID FILM PER CHIMATE API
    const id = this.route.snapshot.paramMap.get('id') || '';

    // CHIAMATA API PER DETTAGLI FILM 
    this.apiService.dettagliFilm(id).subscribe(data => {
      this.film = data;
      this.loaded = true;
    });
    // CHIAMATA API PER FILM SIMILI 
    this.apiService.similarFilms(id).subscribe((data: any) => {
      this.similarFilms = data.results;
    });
    
    // CHIAMATA API PER TRAILER
    this.apiService.videoFilm(id).subscribe((data: any) => {
      const video = data.results.filter ((x:any) => x.type === 'Trailer');
      this.video = video.length > 0 ? video [0] : null;
    });
  }
}

/*================================================================
# MODULO COLLEGAMENTO TRA COMPONENTI
================================================================*/
@NgModule({
    declarations: [SchedaComponent],
    exports: [SchedaComponent],
    imports: [CommonModule, CaroselloModule, HeaderModule]
})
export class HomeModule { }

