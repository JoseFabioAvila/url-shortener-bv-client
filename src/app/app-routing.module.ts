import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TopHundredComponent } from './top-hundred/top-hundred.component';
import { CreateUrlComponent } from './create-url/create-url.component';

const routes: Routes = [
  { path:  '', redirectTo:  'top-hundred', pathMatch:  'full' },
  {
    path: 'top-hundred',
    component: TopHundredComponent
  },
  {
    path: 'create-url',
    component: CreateUrlComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
