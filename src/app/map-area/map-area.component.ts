import { Component, OnInit, AfterViewInit } from '@angular/core';
import { DomFactory } from '../shared/dom-helper'
import { flatMap } from 'rxjs/operators';
import { timer } from 'rxjs';
import { IncidentService, IncidentList } from '../shared/incidentService';

// import { MarkerComponent } from './marker/marker.component';


@Component({
  selector: 'app-map-area',
  templateUrl: './map-area.component.html',
  styleUrls: ['./map-area.component.css']
})
export class MapAreaComponent implements AfterViewInit {
  div: HTMLElement;
  incidentLists: IncidentList[];

  constructor(private dom: DomFactory,private incidentService:IncidentService ) { }

  ngOnInit() {
    timer(1000,2000)
    .pipe(
        flatMap(() => this.incidentService.getIncident())
    )
    .subscribe(data => 
     console.log(this.incidentLists=data)
      );

      
  }

  ngAfterViewInit() {
    
  }

  createSVG() {
    console.log(this.incidentLists)
    this.div = document.getElementById('mapView');
    let svg = this.dom.createSvg();

    this.dom.setAttribute(svg, { "viewBox": "0 0 3094 1810" })

    
    let staticMap = this.dom.createSvgImg();
    this.dom.setAttribute(staticMap, {
      "href": "../../assets/img/berlin_map.png",
      "preserveAspectRatio": "none"
    })
    let rect = staticMap.getBoundingClientRect();
    console.log("svg bounding client",rect)
    svg.appendChild(staticMap);
    let markerImg = this.dom.createSvgImg();
    this.dom.setAttribute(markerImg, {
      "href": '../../assets/img/1.png',
      "x": '500',
      "y": '450',
      "width": "90",
      "height": "90",
      "preserveAspectRatio": "none",
      "class": "cursor"
    })

    // this.points.forEach((i, index) => {
    //   const pointImg = document.createElementNS("http://www.w3.org/2000/svg", "image");
    //   pointImg.setAttribute("id", this.incidentLists[index].id)

    //   switch (this.incidentLists[index].type) {
    //     case 1:
    //       pointImg.setAttribute("href", '../assets/img/1.png');
    //       break;
    //     case 2:
    //       pointImg.setAttribute("href", '../assets/img/2.png');
    //       break;
    //     case 3:
    //       pointImg.setAttribute("href", '../assets/img/3.png');
    //       break;
    //     default:
    //       pointImg.setAttribute("href", '../assets/img/1.png');
    //       break;
    //   }

    //   pointImg.setAttribute("x", i.x);
    //   pointImg.setAttribute("y", i.y);
    //   pointImg.setAttribute("height", '90');
    //   pointImg.setAttribute("width", '90');
    //   pointImg.setAttribute("class", "cursor");
    //   pointImg.addEventListener("click", () => this.showModel(this.incidentLists[index]));
    //   svg.appendChild(pointImg);
    // })
    svg.appendChild(markerImg);
    this.div.appendChild(svg)
  }

}
