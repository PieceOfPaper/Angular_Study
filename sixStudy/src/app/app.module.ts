import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyCheckDirective } from './my-check.directive';

import { FormsModule } from '@angular/forms';  //forms와 관련된 기능
import { ReactiveFormsModule } from '@angular/forms';  //Formcontrol등과 관련된 기능

@NgModule({
  declarations: [
    AppComponent,
    MyCheckDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
