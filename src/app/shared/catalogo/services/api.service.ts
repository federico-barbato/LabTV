import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  apiUrl: string = 'https://api.themoviedb.org/3/';
  apiKey: string = '?api_key=' + environment.apiKey ;
  apiLang: string = '&language=it';

  constructor(private http: HttpClient) { }

  // CHIAMATA API PER RICEVERE ARRAY CONTENTE I FILM POPOLARI DEL MOMENTO 
  listaFilms(page: string = '1'): Observable<any> {
    const url = this.apiUrl + 'movie/popular' + this.apiKey + this.apiLang + '&page=' + page;
    return this.http.get<any>(url);
  }
  // CHIAMATA API PER RICEVERE ARRAY CONTENTE I TELEFILM POPOLARI DEL MOMENTO 
  listaTelefilms(page: string = '1'): Observable<any> {
    const url = this.apiUrl + 'tv/popular' + this.apiKey + this.apiLang + '&page=' + page;
    return this.http.get<any>(url);
  }
  // CHIAMATA API PER RICEVERE I DATI DI UN DETERMINATO FILM RICONOSCIUTO TRAMITE ID
  dettagliFilm(id: string) {
    const url = this.apiUrl + 'movie/' + id + this.apiKey + this.apiLang
    return this.http.get(url);
  }
  // CHIAMATA API PER RICEVERE I DATI DI UN DETERMINATO FILM RICONOSCIUTO TRAMITE ID
  dettagliTelefilm(id: string) {
    const url = this.apiUrl + 'tv/' + id + this.apiKey + this.apiLang
    return this.http.get(url);
  }
  // CHIMATA API PER RICEVERE ARRAY CONTENTEN I FILM SIMILI A QUELLO PRESCELTO RICONOSCIUTO TRAMITE ID
  similarFilms(id: string) {
    const url = this.apiUrl + 'movie/' + id + '/similar' + this.apiKey + this.apiLang
    return this.http.get(url);
  }
  // CHIMATA API PER RICEVERE ARRAY CONTENTEN I FILM SIMILI A QUELLO PRESCELTO RICONOSCIUTO TRAMITE ID
  similarTelefilms(id: string) {
    const url = this.apiUrl + 'tv/' + id + '/similar' + this.apiKey + this.apiLang
    return this.http.get(url);
  }
  // CHIAMATA API PER RICEVERE I FILM IN TENDENZA DI QUESTA SETTIMANA 
  trendingFilms() {
    const url = this.apiUrl + 'trending/movie/week' + this.apiKey + this.apiLang
    return this.http.get(url);
  }
  // CHIAMATA API PER RICEVERE I FILM RICERCATI TRAMITE DENOMINAZIONE
  risultsFilms(search: string) {
    const url = this.apiUrl + 'search/movie' + this.apiKey + '&query=' + search + '&include_adult=false' + this.apiLang
    return this.http.get(url);
  }
  // CHIAMATA API PER RICEVERE IL LINK ESTERNO COLLEGATO A YOUTUBE PER VISIONE TRAILER 
  videoFilm(id: string) {
    const url = this.apiUrl + 'movie/' + id + '/videos' + this.apiKey + this.apiLang
    return this.http.get(url);
  }
  videoTelefilm(id: string) {
    const url = this.apiUrl + 'tv/' + id + '/videos' + this.apiKey + this.apiLang
    return this.http.get(url);
  }

};