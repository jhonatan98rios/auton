import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from './../../environments/environment';


@Injectable({ providedIn: 'root' })
export class InfraredService {
    user: any;

    constructor(private http: HttpClient) {
        this.user = JSON.parse(localStorage.getItem('currentUser'));
    }

    runCommand(device, command) {
        let requestParams = {
            id: device.id,
            command: command,
            protocol: device.protocol
        };
        return this.http.post<any>(`${this.user.ddns}/command/`, requestParams)
            .pipe(map(response => {
                return response;
            }));
    }

    changeBright(device, command, bright) {
        let requestParams = {
            id: device.id,
            command: command,
            protocol: device.protocol,
            color: [bright]
        };
        return this.http.post<any>(`${this.user.ddns}/command/`, requestParams)
            .pipe(map(response => {
                return response;
            }));
    }
}