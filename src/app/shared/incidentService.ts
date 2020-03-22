import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/internal/operators/map';
//import {map } from 'rxjs/add/operator/map';

@Injectable({
    providedIn: 'root'
})
export class IncidentService {
   
    constructor(private _http: HttpClient) {

    }

    public getIncident() {
        const url = '../../assets/incidents.json';
        return this._http.get<IncidentListResponse>('incidentLists')
            .pipe(
                map((response: IncidentListResponse) => {
                    return response.incidentLists;
                })
            );
    }

}

export interface IncidentListResponse {
    incidentLists: IncidentList[];
}


export interface IncidentList {
    id: string;
    type: number;
    point: IMarkerPoint
    from: string;
    to: string;
    details: string;
    delay: number;
    magnitude: number;
}

export interface IMarkerPoint {
    x: number;
    y: number;
}