import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BoardComponent } from './board/board.component';

import { RouterModule, Routes} from '@angular/router';

const router : Routes = [  //라우팅
  {path : 'login' , component : LoginComponent},  
  {path : 'board' , component : BoardComponent},
  {path : '', redirectTo : '/login',  pathMatch : 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BoardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(router,{enableTracing: false, useHash: true}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
