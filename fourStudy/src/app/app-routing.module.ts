import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoodComponent } from './good/good.component';
// import { BadComponent } from './bad/bad.component';

const routes: Routes = [
  { path: 'good', component: GoodComponent }, //good요청은 컴포넌트를 불러서 처리합니다.
  { path: 'bad', loadChildren: () => import('./routing2/routing2.module').then(m => m.Routing2Module) }, //bad요청은 자식 라우터에게 전달합니다.  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
