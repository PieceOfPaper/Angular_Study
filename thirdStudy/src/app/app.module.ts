import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BoardComponent } from './board/board.component';

import { RouterModule, Routes} from '@angular/router';
import { AuthGuard } from './auth.guard';

const router : Routes = [  //라우팅
  {path : 'login' , component : LoginComponent},  
  {path : 'board' , component : BoardComponent, canActivate:[AuthGuard]},
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
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
