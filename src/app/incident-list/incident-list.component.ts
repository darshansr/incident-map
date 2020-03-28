import { Component, OnInit, Input, SimpleChanges, ViewChildren } from '@angular/core';
import { IncidentList } from '../shared/incidentService';
import { SortService } from '../shared/sort.service';
import { NgbPopoverConfig } from '@ng-bootstrap/ng-bootstrap';


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
  incidentMapping: object = {
    0: 'default',
    1: 'Jam',
    2: 'Dangerous Conditions',
    3: 'Lane closed'
  };

  constructor(private sortService: SortService, config: NgbPopoverConfig) {
    config.placement = 'top';
    config.triggers = 'click';
  }

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

  //TODO on click of header item in the incident list by ascending and descending
  public sort(prop: boolean) {
    this.sortService.sortDelay(this.data, prop);
  }


  onMarkerClick(name: HTMLInputElement) {
    let id = (<HTMLInputElement>event.target).id;
    console.log((<HTMLInputElement>event.target).id);
    let ul = document.querySelector(".scrollerDiv");
    Array.from(ul.children).forEach(function (element) {
      element.setAttribute("style", "");
    });

    let text = document.getElementById(id);
    text.style.backgroundColor = "yellow"
    setTimeout(() => {
      text.style.backgroundColor = ""
    }, 2600)
  }

}
