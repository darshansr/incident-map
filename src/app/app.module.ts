import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IncidentListComponent } from './incident-list/incident-list.component';
import { MapAreaComponent } from './map-area/map-area.component';
import { DomFactory } from './shared/dom-helper'
import { HttpXhrBackend, HttpClientModule } from '@angular/common/http';
import { MockXHRBackend } from './shared/mock-api';
import { IncidentService } from './shared/incidentService';
import { DelayConversion } from './shared/pipe/delay-conversion';
import { SortService } from './shared/sort.service';
import { SortByDirective } from './shared/directive/sort-by.directive';
import { TooltipModule } from 'ng2-tooltip-directive';


@NgModule({
  declarations: [
    AppComponent,
    IncidentListComponent,
    MapAreaComponent,
    DelayConversion,
    SortByDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TooltipModule
  ],
  providers: [DomFactory,IncidentService,SortService,
    { provide: HttpXhrBackend, useClass: MockXHRBackend }],
  bootstrap: [AppComponent]
})
export class AppModule { }
