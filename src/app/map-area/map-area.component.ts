import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { DomFactory } from '../shared/dom-helper'
import {  IncidentList } from '../shared/incidentService';



@Component({
  selector: 'app-map-area',
  templateUrl: './map-area.component.html',
  styleUrls: ['./map-area.component.css']
})
export class MapAreaComponent implements OnInit {
  div: HTMLElement;
  @Input()
  data: IncidentList[];
  incidentLists: IncidentList[];
  points = []
  modalIncident: any;
  show: boolean=false;
  incidentMapping = {
    0:'default.png',
      1: 'jam.png',
      2: 'dangerous_conditions.png',
      3: 'lane_closed.png'
    };


  constructor(private dom: DomFactory) { }

  ngOnInit() {
    this.createMap()
  }

  ngOnChanges(changes: SimpleChanges) {
    // only run when property "data" changed
    if (changes['data']) {
      this.createMarker(this.data)
    }
  }
  createMap() {
    this.div = document.getElementById('mapView');
    let svg = this.dom.createSvg();

    this.dom.setAttribute(svg, { "viewBox": "0 0 3094 1810" })
    let staticMap = this.dom.createSvgImg();
    this.dom.setAttribute(staticMap, {
      "id":"staticImage",
      "href": "../../assets/img/berlin_map.png",
      "width": "100%",
      "height": "100%",
      "preserveAspectRatio": "none"
    })
    svg.appendChild(staticMap);
    this.div.appendChild(svg)
  }
  createMarker(data:IncidentList[]) {
    this.generateLatLon(data)
    this.points.forEach((point, index) => {
      data.filter((incident) =>{
        if (incident.id === point.id) {
          let markerImg = this.dom.createSvgImg();
          let marker = this.incidentMapping[incident.type] || this.incidentMapping[0];
          this.dom.setAttribute(markerImg,
            {
              "id": point.id,
              "href": '../../assets/img/' + marker,
              "x":point.latlan[0],
              "y":point.latlan[1],
              "width": '90',
              "height": '90',
              "class":"cursor",
              "preserveAspectRatio":"none"
            })
            markerImg.addEventListener("click", () => this.modelEvent(incident))
          let staticImg=document.getElementById("staticImage")
         staticImg.after(markerImg);
        }
        else{
          //points are needs to be defined
        }
      });
    })
    
  }
  generateLatLon(data:IncidentList[]) {
    if (data !== undefined) {
      data.forEach((val, index) => {
        let x = Math.floor(Math.random() * 3000);
        let y = Math.floor(Math.random() * 1800);
        this.points.push({ id: val.id, latlan: [x, y] })
      })
    }
  }


  public modelEvent(incident:any) {
    this.modalIncident=incident
    if(typeof incident == "boolean")
        this.show=incident;
  }
}
