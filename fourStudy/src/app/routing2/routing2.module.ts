import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BadComponent } from '../bad/bad.component';

const routes: Routes = [
  { path: '', component: BadComponent }, //앞선 부모가 bad로 전달하였으므로 path값은 비어있습니다.
  { path: 'hello', component: BadComponent } //path값이 채워지면 2중패스가 됩니다. ex) path : 'hello'  -> /bad/hello 
];

@NgModule({
  declarations: [
    //
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ]
})
export class Routing2Module { }
