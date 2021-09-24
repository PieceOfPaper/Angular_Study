import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoodComponent } from './good/good.component';
import { BadComponent } from './bad/bad.component';

const routes: Routes = [
  { path: 'good', component: GoodComponent },
  { path: 'bad', component: BadComponent },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
