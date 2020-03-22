import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { timer } from 'rxjs';
import { flatMap, mergeMap } from 'rxjs/operators';
import { IncidentService,IncidentList } from '../shared/incidentService';
import { DomFactory } from '../shared/dom-helper';
declare var $:JQueryStatic;


@Component({
  selector: 'app-incident-list',
  templateUrl: './incident-list.component.html',
  styleUrls: ['./incident-list.component.css']
})
export class IncidentListComponent implements OnInit {
  
  @Input()
  data: IncidentList[];
  incidentLists: IncidentList[];
 

  constructor(private incidentService:IncidentService ) { }
  ngOnInit() {
    //this.hello(data);
  }

  ngOnChanges(changes: SimpleChanges) {
    // only run when property "data" changed
    if (changes['data']) {
      //  this.groupPosts = this.createSVG(this.data);
        this.incidentLists=this.data;
        this.hello(this.data)
    }
  }

  hello(data){
   // console.log('hielo',data)
  }

  
  

  /* normal function */
  // create dispaly incident data list -->
  //changes :calclate dealy time when new incident comes
  //sort incident by value
  // return incident list in ARRAY 
  //fINALLY INCIDENT LIST
  //HAVING 
  // createDisplayedIncidentsData() {
  //   var array = [];

  //   for (var incidentId in incidentsData) {
  //     var incident = incidentsData[incidentId],
  //       properties = incident.properties;

  //     if (!properties.delaySeconds) {
  //       properties.delaySeconds = 0;
  //     }
  //     array.push(incident);
  //   }
  //   if (sortedByValue && sortDirection) {
  //     array.sort(compareIncidentCategory());
  //   }
  //   return array;
  // }

  //create incident item row
  //required marker data as parameter
  // setting propertie values
  //appending   incidentDetailsContent,incidentDelay,incidentLength

// createIncidentItemRow(markerData) {
//     var properties = markerData.properties,
//         delaySeconds = properties.delaySeconds,
//         lengthMeters = properties.lengthMeters;

//     var incidentDelay = DomHelpers.elementFactory('div', '', formatters.convertToTimeFormat(delaySeconds)),
//         incidentDetailsContent = createIncidentDetailsContent(properties),
//         incidentsListItem = DomHelpers.elementFactory('div', 'tt-incidents-list__item');

//     incidentsListItem.setAttribute('data-id', properties.id);
//     incidentsListItem.appendChild(incidentDetailsContent);
//     incidentsListItem.appendChild(incidentDelay);
//     return incidentsListItem;
// }


// createIncidentsList(isSorted) {
//   results.innerHTML = '';
//   if (!displayedIncidentsData.length) {
//       var placeholder = DomHelpers.elementFactory('div', 'tt-overflow__placeholder -small',
//           'No data for this view, try to move or zoom...');

//       results.appendChild(placeholder);
//       return;
//   }
//   var incidentsList = DomHelpers.elementFactory('div', 'tt-incidents-list');

//   displayedIncidentsData.forEach(function(markerData) {
//       var incidentsItemRow = createIncidentItemRow(markerData);

//       incidentsList.appendChild(incidentsItemRow);
//   });
//   incidentsList.addEventListener('click', handleResultItemClick);
//   results.appendChild(incidentsList);
//   var selectedIncidentElement = document.querySelector('div[data-id="' + selectedIncidentId + '"]');

//   if (selectedIncidentId && selectedIncidentElement) {
//       selectedIncidentElement.classList.add(selectedClass);
//   } else {
//       selectedIncidentId = '';
//   }
//   if (isSorted) {
//       document.querySelector('.js-results').scrollTop = 0;
//   }
// }


// /*dom element creation*/
// createIncidentDetailsContent(properties) {
//   var incidentDetailsElement = DomHelpers.elementFactory('div', '');

//   incidentDetailsElement.innerHTML =
//       '<div class="tt-incidents-details">' +
//           '<div class="tt-traffic-icon -details">' +
//               '<div class="tt-icon-circle-' + properties.magniuted + ' -small">' +
//                       '<div class="tt-icon-' + iconsMapping[properties.incidentCategory] + '">') + '</div>' +
//               '</div>' +
//           '</div>' +
//           '<div>' +
//               '<div>' + properties.from + '</div>' +
//               '<div>' + properties.to + '</div>' +
//           '<div>' +
//       '</div>';
//   return incidentDetailsElement;
// }

// incidentDelayCalculation() {

// }
//   //compare incindent category between asecnding and descending
//   //based on delay between list
// compareIncidentCategory(a, b) {
//     var firstValue = a.properties[sortedByValue],
//         secondValue = b.properties[sortedByValue],
//         modifier = sortDirection === 'asc' ? 1 : -1;

//     if (typeof firstValue === 'string') {
//         return modifier * firstValue.localeCompare(secondValue);
//     }
//     return modifier * (firstValue - secondValue);
// }

// createIncidentHeader() {
//   var headerNames = [
//           {
//               text: 'Incident',
//               attribute: 'from'
//           },
//           {
//               text: 'Delay',
//               attribute: 'delaySeconds'
//           },
//           {
//               text: 'Length',
//               attribute: 'lengthMeters'
//           }
//       ],
//       incidentHeader = document.querySelector('.tt-side-panel__header');

//   incidentHeader.innerHTML = '';
//   headerNames.forEach(function(headerName) {
//       var headerElement = DomHelpers.elementFactory('div', ''),
//           sortIcon = headerName.attribute === sortedByValue ?
//               sortDirection === 'asc' ?
//                   '<span class="tt-button -sortable">' +
//                       '<span class="tt-icon -sort -brown"></span>' +
//                   '</span>' :
//                   '<span class="tt-button -sortable">' +
//                       '<span class="tt-icon -sort -brown -desc"></span>' +
//                   '</span>' :
//               '<span class="tt-button -sortable">' +
//                   '<span class="tt-icon -sort"></span>' +
//               '</span>';

//       headerElement.innerHTML = headerName.text + sortIcon;
//       headerElement.setAttribute('data-sort', headerName.attribute);
//       headerElement.addEventListener('click', handleIncidentsSort);
//       incidentHeader.appendChild(headerElement);
//   });
// }

}
