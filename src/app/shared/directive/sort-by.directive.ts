// import { Directive, Input, Output, HostListener } from '@angular/core';

// @Directive({
//     selector: '[tpSortBy]'
// })

// export class SortByDirective {
//     @Output()
//     //event emitter or Observer

//     @Input('tpSortBy')
//     set sortBy(value) {
//     }
  
//     @HostListener('click')
//     onClick(){
//         //raise the click event
//     }
//      compareIncidentCategory(a, b) {
//         var firstValue = a.properties[sortedByValue],
//             secondValue = b.properties[sortedByValue],
//             modifier = sortDirection === 'asc' ? 1 : -1;

//         if (typeof firstValue === 'string') {
//             return modifier * firstValue.localeCompare(secondValue);
//         }
//         return modifier * (firstValue - secondValue);
//     }
// }