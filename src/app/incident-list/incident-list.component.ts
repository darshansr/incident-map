import { Component, Input, SimpleChanges, OnChanges } from '@angular/core';
import { IncidentList } from '../shared/incidentService';
import { SortService } from '../shared/sort.service';


@Component({
  selector: 'app-incident-list',
  templateUrl: './incident-list.component.html',
  styleUrls: ['./incident-list.component.css']
})
export class IncidentListComponent implements OnChanges {

  @Input() data: IncidentList[];
  incidentLists: IncidentList[];
  incidentMapping: object = {
    0: 'default',
    1: 'Jam',
    2: 'Dangerous Conditions',
    3: 'Lane closed'
  };

  constructor(private sortService: SortService) {
  }


  //load the data into UI template by mapping incident value into new key value
  ngOnChanges(changes: SimpleChanges) {
    // only run when property "data" changed
    if (changes['data'].previousValue===undefined && changes['data'].currentValue!==undefined) {
     //first time data
      this.data.forEach((point) => {
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

    sortHeader(prop: string) {
      this.sortService.sort(this.data, prop);
    }

    onMarkerClick() {
      let id = (<HTMLInputElement>event.target).id;
      let listDiv = document.querySelector(".scrollerDiv");
      Array.from(listDiv.children).forEach(function (element) {
        element.setAttribute("style", "");
      });

      let text = document.getElementById(id);
      text.style.backgroundColor = "yellow"
      setTimeout(() => {
        text.style.backgroundColor = ""
      }, 2600)
    }

  }
