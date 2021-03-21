import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GuitarTabComponent } from './guitar-tab/guitar-tab.component';
import { GuitarTabStringComponent } from './guitar-tab-string/guitar-tab-string.component';
import { GuitarTabSectionComponent } from './guitar-tab-section/guitar-tab-section.component';

@NgModule({
  declarations: [
    AppComponent,
    GuitarTabComponent,
    GuitarTabStringComponent,
    GuitarTabSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
