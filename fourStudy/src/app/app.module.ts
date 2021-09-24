import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GoodComponent } from './good/good.component';
import { BadComponent } from './bad/bad.component';

import { Routing2Module } from './routing2/routing2.module';

@NgModule({
  declarations: [
    AppComponent,
    GoodComponent,
    BadComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Routing2Module,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
