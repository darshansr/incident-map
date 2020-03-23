import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { IncidentList } from '../shared/incidentService';
import { SortService } from '../shared/sort.service';


@Component({
  selector: 'app-incident-list',
  templateUrl: './incident-list.component.html',
  styleUrls: ['./incident-list.component.css']
})
export class IncidentListComponent implements OnInit {

  @Input()
  data: IncidentList[];
  incidentLists: IncidentList[];
  modalIncident: any;
  show: boolean = false;

  //create an interface to map incident
  incidentMapping:object = {
    0: 'default',
    1: 'Jam',
    2: 'Dangerous Conditions',
    3: 'Lane closed'
  };
 
  constructor(private sortService: SortService) { }

  ngOnInit() {
  }
  
  

  //load the data into UI template by mapping incident value into new key value
  ngOnChanges(changes: SimpleChanges) {
    // only run when property "data" changed
    if (changes['data'].currentValue != undefined && this.data) {
      this.data.forEach((point, index) => {
        switch (point.type) {
          case 1:
            point['incident'] = this.incidentMapping['1'];
            break;
          case 2:
            point['incident'] = this.incidentMapping['2'];
            break;
          case 3:
            point['incident'] = this.incidentMapping['3'];
            break;
          default:
            point['incident'] = this.incidentMapping['0'];
            break;
        }
      })
      this.incidentLists = this.data;
      this.incidentLists = this.incidentLists.sort((a, b) => b.delay - a.delay);
    }
  }

  //Best Approach is to create custom model as service to access across the application
  public modelEvent(incident: any) {
    this.modalIncident = incident
    if (typeof incident == "boolean")
      this.show = incident;
  }

  //TODO on click of header item in the incident list by ascending and descending
  public sort(prop: boolean) {
    this.sortService.sortDelay(this.data, prop);
  }

}
