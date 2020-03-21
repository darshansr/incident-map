import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IncidentListComponent } from './incident-list/incident-list.component';
import { MapAreaComponent } from './map-area/map-area.component';
import { MarkerComponent } from './map-area/marker/marker.component';
import { ZoomInOutComponent } from './map-area/zoom-in-out/zoom-in-out.component';
// import { PopUpComponent } from './map-area/pop-up/pop-up.component';
//import { MarkerPointsComponent } from './map-area/marker/marker-points.component';
import { DomFactory } from './shared/dom-helper'
import { HttpXhrBackend, HttpClientModule } from '@angular/common/http';
import { MockXHRBackend } from './shared/mock-api';
import { IncidentService } from './shared/incidentService';

@NgModule({
  declarations: [
    AppComponent,
    IncidentListComponent,
    MapAreaComponent,
    MarkerComponent,
    ZoomInOutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DomFactory,IncidentService,
    { provide: HttpXhrBackend, useClass: MockXHRBackend }],
  bootstrap: [AppComponent]
})
export class AppModule { }
