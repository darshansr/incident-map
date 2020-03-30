/**
 * Map area component to create static SVG map and Markers on top of it.
 * 
 * onListClick property to capture event trigger on List Area and communicate between 
 * Map and List component
 *
 * @publicApi
 */
import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { DomFactory } from '../shared/dom-helper'
import { IncidentList } from '../shared/incidentService';

@Component({
  selector: 'app-map-area',
  templateUrl: './map-area.component.html',
  styleUrls: ['./map-area.component.css']
})
export class MapAreaComponent implements OnInit {
  @Input()
  data: IncidentList[];
  incidentLists: IncidentList[];
  points = []
  modalIncident: any;
  incidentMapping = {
    0: 'default.png',
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

  private createMap() {
    let map = document.getElementById('mapView');
    let svg = this.dom.createSvg();

    this.dom.setAttribute(svg, { "viewBox": "0 0 3094 1865" })
    let staticMap = this.dom.createSvgImg();
    this.dom.setAttribute(staticMap, {
      "id": "staticImage",
      "href": "../../assets/img/berlin_map.png",
      "width": "100%",
      "height": "100%",
      "preserveAspectRatio": "none"
    })
    svg.appendChild(staticMap);
    map.appendChild(svg)
  }

  private createMarker(data: IncidentList[]) {
    this.generateLatLon(data)
    this.points.forEach((point, index) => {
      data.filter((incident) => {
        if (incident.id === point.id) {
          let markerImg = this.dom.createSvgImg();
          let marker = this.incidentMapping[incident.type] || this.incidentMapping[0];
          this.dom.setAttribute(markerImg,
            {
              "id": point.id,
              "href": '../../assets/img/' + marker,
              "x": point.latlan[0],
              "y": point.latlan[1],
              "width": '100',
              "height": '100',
              "class": "cursor tooltip-trigger",
              "preserveAspectRatio": "none"
            })
          let tooltipTag = this.dom.createSvgText();
          this.dom.setAttribute(tooltipTag,
            {
              "id": "tooltip-" + point.id,
              "x": point.latlan[0],
              "y": point.latlan[1],
              "preserveAspectRatio": "none",
              "width": '100',
              "height": '100',
              'class': "tooltip-style",
              'visibility': "hidden"
            })
          let tspan = this.dom.createSvgTSpan();
          this.dom.setAttribute(tspan, {
            "x": point.latlan[0] - 250,
            "y": point.latlan[1],
            'class': "tooltip-style"
          })
          tspan.innerHTML = "Traffic Incident is " + incident.details;


          markerImg.addEventListener("mousemove", () => this.showTooltip(incident.id))
          markerImg.addEventListener("mouseout", () => this.hideTooltip(incident.id))

          let staticImg = document.getElementById("staticImage")
          staticImg.after(markerImg);

          markerImg.after(tooltipTag);
          tooltipTag.appendChild(tspan)

        }
      });
    })

  }

  private generateLatLon(data: IncidentList[]) {
    if (data !== undefined) {
      data.forEach((val) => {
        let x = Math.floor(Math.random() * 3000);
        let y = Math.floor(Math.random() * 1800);
        this.points.push({ id: val.id, latlan: [x, y] })
      })
    }
  }


  private showTooltip(incident: any) {
    let tooltip = document.getElementById("tooltip-" + incident);
    if (tooltip != undefined)
      this.dom.setAttribute(tooltip, { "visibility": "visible" });
  }

  private hideTooltip(incident: any) {
    let tooltip = document.getElementById("tooltip-" + incident);
    if (tooltip != undefined)
      this.dom.setAttribute(tooltip, { "visibility": "hidden" })
  }

  onListClick() {
    let id = (<HTMLInputElement>event.target).id;
    let text = document.querySelectorAll('text');
    text.forEach((point) => {
      point.setAttribute("visibility", "hidden")
    })
    this.showTooltip(id)
    setTimeout(() => {
      this.hideTooltip(id)
    }, 2600)
  }
  
}
