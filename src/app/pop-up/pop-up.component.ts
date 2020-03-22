import { Component, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})

export class PopUpComponent {
  @Input() incidentValue: any;
  @Input() show: boolean;
  @Output() popup: EventEmitter<boolean> = new EventEmitter<boolean>();

  incidentMagnitude={
    0:'Unknown',
    1:'Minor',
    2:'Moderate',
    3:'Major'
  }


  ngOnChanges(changes: SimpleChanges) {
    // only run when property "data" changed
    if (changes['incidentValue'].currentValue != undefined && this.incidentValue) {
      for (let item in this.incidentMagnitude) {
         if(this.incidentValue['magnitude']===parseInt(item)){
           this.incidentValue['magnitudeDetails']=this.incidentMagnitude[this.incidentValue['magnitude']]
         }
       }
       this.modelOpen()
    }
    else {
      this.show = false
    }
  }

  modelOpen() {
    this.show = true;
  }

  modelClose() {
    this.popup.emit(false);
  }

}
