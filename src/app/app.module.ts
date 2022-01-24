import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ExcersiceComponentComponent } from './excersice-component/excersice-component.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, ExcersiceComponentComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
