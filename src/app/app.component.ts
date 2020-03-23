import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { flatMap, mergeMap } from 'rxjs/operators';
import { IncidentService,IncidentList } from './shared/incidentService';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'traffic-incident-app';
  incidentLists:IncidentList[];


  constructor(public incidentService:IncidentService) {
  }
  ngOnInit() {
    timer(1,120000)
    .pipe(
      flatMap(() => this.incidentService.getIncident())
    )
    .subscribe(val => 
        this.incidentLists=val
    );
  }
     
}
