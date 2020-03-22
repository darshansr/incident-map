import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IncidentListComponent } from './incident-list/incident-list.component';
import { MapAreaComponent } from './map-area/map-area.component';
import { PopUpComponent } from './pop-up/pop-up.component';
import { DomFactory } from './shared/dom-helper'
import { HttpXhrBackend, HttpClientModule } from '@angular/common/http';
import { MockXHRBackend } from './shared/mock-api';
import { IncidentService } from './shared/incidentService';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DelayConversion } from './shared/pipe/delay-conversion';
import { SortService } from './shared/sort.service';
import { SortByDirective } from './shared/directive/sort-by.directive';

@NgModule({
  declarations: [
    AppComponent,
    IncidentListComponent,
    MapAreaComponent,
    PopUpComponent,
    DelayConversion,
    SortByDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [DomFactory,IncidentService,SortService,
    { provide: HttpXhrBackend, useClass: MockXHRBackend }],
  bootstrap: [AppComponent]
})
export class AppModule { }
