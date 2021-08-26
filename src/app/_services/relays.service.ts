import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from './../../environments/environment';


@Injectable({ providedIn: 'root' })
export class RelaysService {
    user: any;

    constructor(private http: HttpClient) {
        this.user = JSON.parse(localStorage.getItem('currentUser'));
    }

    toggleDevice(device, command) {
        let requestParams = {
            id: device.id,
            command: command
        };
        return this.http.post<any>(`${this.user.ddns}/R/command/`, requestParams)
            .pipe(map(response => {
                return response;
            }));
    }
}