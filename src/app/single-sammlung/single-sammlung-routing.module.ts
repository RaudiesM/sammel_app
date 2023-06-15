import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SingleSammlungPage } from './single-sammlung.page';

const routes: Routes = [
  {
    path: '',
    component: SingleSammlungPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SingleSammlungPageRoutingModule {}
