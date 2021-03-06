import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AlertModule } from './alert/alert.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { HelloworldDirective } from './helloworld.directive';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    HelloworldDirective
  ],
  imports: [
    BrowserModule,
    AlertModule,  //새로만든 얼럿 모듈입니다.
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
