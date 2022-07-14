import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TracksRoutingModule } from './tracks-routing.module';
import { TracklistComponent } from './tracklist/tracklist.component';


@NgModule({
  declarations: [
    TracklistComponent
  ],
  imports: [
    CommonModule,
    TracksRoutingModule
  ]
})
export class TracksModule { }
