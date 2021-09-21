import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BoardComponent } from './board/board.component';

import { RouterModule, Routes} from '@angular/router';
import { AuthGuard } from './auth.guard';

import { AngularFireModule} from '@angular/fire/compat'
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

const fireEnvironment = {
  production: true,
  firebase: {
    apiKey: "AIzaSyDcdtBBp1RgnMN2avYAZEV9pJicmo0SrxI",
    authDomain: "angular-study-965ed.firebaseapp.com",
    projectId: "angular-study-965ed",
    storageBucket: "angular-study-965ed.appspot.com",
    messagingSenderId: "492546308019",
    appId: "1:492546308019:web:5694f3ff68a245bb96fdc6",
    measurementId: "G-M4H357EE5H"
  }
}

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
    RouterModule.forRoot(router,{enableTracing: false}),
    FormsModule,
    AngularFireModule.initializeApp(fireEnvironment.firebase, '/'),
    AngularFirestoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
