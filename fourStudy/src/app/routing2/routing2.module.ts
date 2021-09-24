import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BadComponent } from '../bad/bad.component';

const routes: Routes = [
  { path: 'bad2', component: BadComponent },  
];

@NgModule({
  declarations: [
    //
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ]
})
export class Routing2Module { }
