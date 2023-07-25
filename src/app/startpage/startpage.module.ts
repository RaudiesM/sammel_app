import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StartpagePageRoutingModule } from './startpage-routing.module';

import { StartpagePage } from './startpage.page';
import { ComponentModule } from '../components/component/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StartpagePageRoutingModule,
    ComponentModule
  ],
  declarations: [StartpagePage]
})
export class StartpagePageModule {}
