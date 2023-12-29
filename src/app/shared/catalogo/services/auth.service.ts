import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    constructor (private http: HttpClient) {}
    // FUNZIONE PER EFFETTUARE IL LOGIN
    login(email: string, password: string) {
        // CHIAMATA API PER INDIVIDUARE UTENTE 
        const url = "http://localhost:3000/utenti/?email=" + email + "&password=" + password;
        // UTILIZZO DELLA FUNZIONE "GET" PER INTERROGARE IL SERVER ED OTTENTE I DATI UTENTE  
        return this.http.get<any>(url);
    }
    // FUNZIONE PER REGISTRAZIONE NUOVO UTENTE
    register(email: string, password: string) {
        // CHIAMATA API PER REGISTRARE UTENTE NEL DATABASE 
        const url = "http://localhost:3000/utenti";
        // CORPO DELLA CHIAMATA 
        const body = {
            email: email,
            password: password
        }
        // UTILIZZO DELLA FUNZIONE "POST" PER CREARE ALL'INTERNO DEL DATABASE UN NUOVO UTENTE 
        return this.http.post<any>(url,body);
    }

    logged () {
        // FUNZIONE PER CONTROLLARE SE L'UTENTE è LOGGATO
        return localStorage.getItem("utente") || false;
    }

    logout () {
        // FUNZIONE PER EFFETTUARE IL LOGOUT DELL'UTENTE
        if (!confirm("vuoi effettuare il logout?")) return;
        localStorage.removeItem("utente");
    }
}