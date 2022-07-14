import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoryRoutingModule } from './history-routing.module';
import { MenuComponent } from './menu/menu.component';
import { HistoryComponent } from './history/history.component';


@NgModule({
  declarations: [
    MenuComponent,
    HistoryComponent
  ],
  imports: [
    CommonModule,
    HistoryRoutingModule
  ]
})
export class HistoryModule { }
