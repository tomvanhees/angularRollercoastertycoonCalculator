import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RctRidestatsComponent } from './rct-ridestats/rct-ridestats.component';
import { RctTableComponent } from './rct-table/rct-table.component';
import { RctRideSelectComponent } from './rct-ride-select/rct-ride-select.component';

@NgModule({
  declarations: [
    AppComponent,
    RctRidestatsComponent,
    RctTableComponent,
    RctRideSelectComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
