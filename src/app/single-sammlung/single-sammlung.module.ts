import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SingleSammlungPageRoutingModule } from './single-sammlung-routing.module';

import { SingleSammlungPage } from './single-sammlung.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SingleSammlungPageRoutingModule
  ],
  declarations: [SingleSammlungPage]
})
export class SingleSammlungPageModule {}
