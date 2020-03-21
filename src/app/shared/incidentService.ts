import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class IncidentService {
    constructor(private http: HttpClient) {

    }

    public getIncident() {
        return this.http.get<IncidentListResponse>('incidentLists')
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