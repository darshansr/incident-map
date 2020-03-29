

import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { DomFactory } from '../shared/dom-helper'
import { IncidentList } from '../shared/incidentService';



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
  show: boolean = false;
  incidentMapping = {
    0: 'default.png',
    1: 'jam.png',
    2: 'dangerous_conditions.png',
    3: 'lane_closed.png'
  };
  valueX: any;
  valueY: any;


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

    this.dom.setAttribute(svg, { "viewBox": "0 0 3094 1865", "id": "svg-map" })
    let staticMap = this.dom.createSvgImg();

    this.dom.setAttribute(staticMap, {
      "id": "staticImage",
      "href": "../../assets/img/berlin_map.png",
      "width": "100%",
      "height": "100%",
      "preserveAspectRatio": "none"
    })
    svg.appendChild(staticMap);
    this.div.appendChild(svg)
  }
  createMarker(data: IncidentList[]) {
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
              "class": "cursor",
              "preserveAspectRatio": "none",
              "data-tooltip-text": "Traffic Incident is " + incident.details
            })
          let gTag = this.createToolTipText(point);


          markerImg.addEventListener("mousemove", () => this.showTooltip(point.id))
          markerImg.addEventListener("mouseout", () => this.hideTooltip(point.id))
          let staticImg = document.getElementById("staticImage")
          staticImg.after(markerImg);
          markerImg.after(gTag);
        }
        else {
          //points are needs to be defined
        }
      });
    })
  }

  createToolTipText(point: any) {
    let tooltipTag = this.dom.createSvgText();
    this.dom.setAttribute(tooltipTag,
      {
        "x": point.latlan[0],
        "y": point.latlan[1],
      })
    tooltipTag.innerHTML = "Traffic Incident";
    let gTag = this.dom.createSvgTagG()
    this.dom.setAttribute(gTag, { id: "tooltip-" + point.id, visibility: "hidden" })
    let rect2Tag = this.dom.createSvgTagRect();
    this.dom.setAttribute(rect2Tag, {
      width: "100", height: "100", fill: "white", "x": point.latlan[0],
      "y": point.latlan[1],
      rx: "2", ry: "2"
    })
    let rect1Tag = this.dom.createSvgTagRect();
    this.dom.setAttribute(rect1Tag, {
      "x": point.latlan[0],
      "y": point.latlan[1], width: "100", height: "100", fill: "black", opacity: "0.4", rx: "2", ry: "2"
    })

    gTag.appendChild(rect1Tag);
    gTag.appendChild(rect2Tag);
    gTag.appendChild(tooltipTag)
    console.log(point);
    return gTag;
  }

  backGroundToolTip() {

  }

  generateLatLon(data: IncidentList[]) {
    if (data !== undefined) {
      data.forEach((val, index) => {
        let x = Math.floor(Math.random() * 3000);
        let y = Math.floor(Math.random() * 1800);
        this.points.push({ id: val.id, latlan: [x, y] })
      })
    }
  }


  public modelEvent(incident: any) {
    this.modalIncident = incident
    if (typeof incident == "boolean")
      this.show = incident;
  }

  showTooltip(evt) {
    console.log('value of the event', event)
    var svg = document.querySelector("svg");
    var CTM = svg.getScreenCTM();
    console.log('ctm value', CTM)
    var mouseX = (event.clientX - CTM.e) / CTM.a;
    var mouseY = (event.clientY - CTM.f) / CTM.d;
    // var valueX = mouseX + 6 / CTM.a;
    // var valueY = mouseY + 30 / CTM.d;
    console.log(mouseX, mouseY);
    var tooltip = document.getElementById("tooltip-" + evt);
    console.log('list',tooltip);
    var tooltipText = tooltip.getElementsByTagName('text')[0].firstChild;
    // tooltip.setAttributeNS(null, "x", valueX.toString());
    // tooltip.setAttributeNS(null, "y", valueY.toString());
    tooltip.setAttributeNS(null, "transform", "translate(" + mouseX + " " + mouseY + ")");
    tooltipText.data = event.target.getAttributeNS(null, "data-tooltip-text");

    //   var tooltipRects = tooltip.getElementsByTagName('rect');
    //  var length =  tooltipText.data.length
    // 			for (var i = 0; i < tooltipRects.length; i++) {
    // 				tooltipRects[i].setAttributeNS(null, "width", length + 8);
    //       }
    tooltip.setAttributeNS(null, "visibility", "visible");
  }

  hideTooltip(evt) {

    //console.log('value of the event',evt)
    var tooltip = document.getElementById("tooltip-" + evt);
    tooltip.setAttributeNS(null, "visibility", "hidden");
  }

}
