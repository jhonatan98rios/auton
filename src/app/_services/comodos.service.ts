import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({ providedIn: 'root' })
export class ComodosService {
    user: any;

    constructor(private http: HttpClient) {
        this.user = JSON.parse(localStorage.getItem('currentUser'));
    }

    getAll() {
        console.log("CHAMANDOOO");
        return this.http.get<any>(`${this.user.ddns}/`)
            .pipe(map(comodos => {
                return comodos;
            }));
    }
}