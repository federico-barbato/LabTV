import { Component, Input, NgModule } from '@angular/core';
import { ApiService } from '../../shared/catalogo/services/api.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../shared/catalogo/services/auth.service';
import { DomSanitizer } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HeaderModule } from "../../shared/header/header.component";
import { CaroselloModule } from "../../shared/carosello/carosello.component";

@Component({
  selector: 'app-scheda-telefilm',
  templateUrl: './scheda-telefilm.component.html',
  styleUrls: ['./scheda-telefilm.component.scss']
})
export class SchedaTelefilmComponent {
  @Input() tipo:string = 'film';
  telefilm: any = null;
  loaded: boolean = false;
  similarTelefilms: any = [];
  video: any = [];

  constructor(private apiService: ApiService, private route: ActivatedRoute, public sanitizer: DomSanitizer, public authService: AuthService) {
  }

  ngOnInit(): void {
    // PRELIEVO VALORE ID FILM PER CHIMATE API
    const id = this.route.snapshot.paramMap.get('id') || '';

    // CHIAMATA API PER DETTAGLI TELEFILM 
    this.apiService.dettagliTelefilm(id).subscribe(data => {
      this.telefilm = data;
      this.loaded = true;
    });
    // CHIAMATA API PER FILM SIMILI 
    this.apiService.similarTelefilms(id).subscribe((data: any) => {
      this.similarTelefilms = data.results;
    });
    
    // CHIAMATA API PER TRAILER
    this.apiService.videoTelefilm(id).subscribe((data: any) => {
      const video = data.results.filter ((x:any) => x.type === 'Trailer');
      this.video = video.length > 0 ? video [0] : null;
    });
  }
}

/*================================================================
# MODULE
================================================================*/
@NgModule({
    declarations: [SchedaTelefilmComponent],
    exports: [SchedaTelefilmComponent],
    imports: [CommonModule, HeaderModule, CaroselloModule]
})
export class SchedaTelefilmModule {}
