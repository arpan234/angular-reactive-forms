import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ExcersiceComponentComponent } from './excersice-component/excersice-component.component';
import { UserReactiveFormComponent } from './user-reactive-form/user-reactive-form.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule ],
  declarations: [ AppComponent, ExcersiceComponentComponent, UserReactiveFormComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
