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

    /**
    * @ngdoc method
    * @name IncidentService #getIncident
    * Http Client get method access incident of list
    *
    * @return {method} Return list of incident as a response of type IncidentListResponse
    */
    public getIncident() {
        return this._http.get<IncidentListResponse>('incidentLists')
            .pipe(
                map((response: IncidentListResponse) => {
                    return response.incidentLists;
                })
            );
    }

    public compareArrayObject(previousValue){
        return function(currentValue){
          return previousValue.filter(function(other){
            return other.id == currentValue.id && other.delay == currentValue.delay;
          }).length==0;
        }
      }

}

/**
 * Incident List Response 
 *
 */
export interface IncidentListResponse {
    /**
     * incident List array
     */
    incidentLists: IncidentList[];

}


/**
 * Incident List 
 * 
 *  Occurence of incident to capture
 * @publicapi
 */
export interface IncidentList {
    /**
     * id Incident 
     */
    id: string;

    /**
    * type of Incident parameters (Jam, Lane Close, Dangerous etc.)
    */
    type: number;

    /**
     * point of @interface IMarkerPoint
     */
    point: IMarkerPoint

    /**
     * from Incident 
     */
    from: string;
    /**
    * to Incident 
    */
    to: string;

    /**
    *  Incident details
    */
    details: string;
    /**
     *  dealy in incident 
     */
    delay: number;
    /**
     *  magnitude of incident for example(unkown,moderate,medium)
     */
    magnitude: number;
}

/**
 * Marker Points 
 * 
 * Holds Marker x and y values
 * @publicapi
 */
export interface IMarkerPoint {
    /**
     * x point
     */
    x: number;

    /**
     * y point
     */
    y: number;
}