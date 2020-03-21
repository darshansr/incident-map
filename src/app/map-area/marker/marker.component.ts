import { Component, OnInit, Input } from '@angular/core';
import { DomFactory } from 'src/app/shared/dom-helper';
import { IMarkerPoint } from 'src/app/shared/incidentService';

@Component({
  selector: 'app-marker',
  templateUrl: './marker.component.html',
  styleUrls: ['./marker.component.css']
})

export class MarkerComponent implements OnInit {

  constructor(private dom:DomFactory ) { }

  ngOnInit(): void {
  }

  private _dataPoints: IMarkerPoint[] = null;
  @Input() public get dataPoints() {
    return this._dataPoints;
  }

  public set dataPoints(value: any[]) {
    this._dataPoints = value;
   // this.renderMapPoints();
  }

//   //clear the marker points
//   private clearMapPoints(){

//   }

//   //entry points to helps to create pointer on options or lat and long
//   SearchMarker.prototype.drawEntryPoints = function(elem) {
//     if (this.options.entryPoints && this.poiData.entryPoints) {
//         this.entryPoints = new EntryPoints(this.poiData, elem, this.options);
//     }
// };

//   //create marker using prototype function

//   SearchMarker.prototype.createMarker = function() {
//     var elem = document.createElement('div');
//     elem.className = 'tt-icon-marker-black tt-search-marker';
//     if (this.options.markerClassName) {
//         elem.className += ' ' + this.options.markerClassName;
//     }

//     var innerElem = document.createElement('div');
//     var icon = new SearchIconCreator('white', this.poiData).getIcon();
//     innerElem.className = 'marker-inner ' + icon;

//     elem.appendChild(innerElem);
//     this.drawEntryPoints(elem);
//     return elem;
//   };

//   SearchMarker(poiData, options) {
//     this.poiData = poiData;
//     this.options = options || {};
//     this.marker = new tt.Marker({
//         element: this.createMarker(),
//         anchor: 'bottom'
//     });
//     var lon = this.poiData.position.lng || this.poiData.position.lon;
//     this.marker.setLngLat([
//         lon,
//         this.poiData.position.lat
//     ]);
//     this.marker.setPopup(new SearchMarkerPopup(this.poiData, this.options));
//   }

  createMarker() {
    // const pointImg = this.dom.svgElement("http://www.w3.org/2000/svg", "image");
    // this.dom.setAttribute(pointImg, 'class','marker');

    // this.dom.setAttribute(pointImg,"href", '../assets/img/1.png');
    // this.dom.setAttribute(pointImg,"x",'500');
    // this.dom.setAttribute(pointImg,"y",'450');
    // this.dom.setAttribute(pointImg,"height", '90');
    // this.dom.setAttribute(pointImg,"width", '90');
    // this.dom.setAttribute(pointImg,"class", "cursor")
    // return pointImg;
      // add marker to **********svgImage************
      
  }




}
