// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-pop-up',
//   templateUrl: './pop-up.component.html',
//   styleUrls: ['./pop-up.component.css']
// })
// export class PopUpComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }
  
//   //what is this function ----> create custom pop up/model 
//   //dynamically create custom template use it in html file 
//   //change css

//   createCustomPopupBody(displayedFeatures) {
//     return displayedFeatures.map(function(feature) {
//         return (
//             '<div class="tt-traffic-cluster__item">' +
//                 '<div class="tt-traffic-icon">' +
//                     '<div class="tt-icon-circle-' + feature.properties.incidentSeverity + ' -small">' +
//                         '<div class="tt-icon-' + iconsMapping[feature.properties.incidentCategory] + '"></div>' +
//                     '</div>' +
//                 '</div>' +
//                 '<div>' +
//                     '<p>From: ' + feature.properties.from + '</p>' +
//                     '<p>To: ' + feature.properties.to + '</p>' +
//                 '</div>' +
//             '</div>'
//         );
//     }).join('');
// }

// createCustomPopupHeader() {
//   return ['Category', 'Streets', 'Length'].map(function(text) {
//       return '<div>' + text + '</div>';
//   }).join('');
// }



// }
