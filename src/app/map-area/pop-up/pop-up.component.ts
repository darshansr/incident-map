import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';


@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent {
  @Input() incidentValue: any;
  @Input() show: boolean;
  @Output() popup: EventEmitter<boolean> = new EventEmitter<boolean>();


  ngOnChanges(changes: SimpleChanges) {
    // only run when property "data" changed
    if (changes['incidentValue'].currentValue != undefined && this.incidentValue) {
      this.modelOpen();
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
