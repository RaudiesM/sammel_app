import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItemPageRoutingModule } from './item-routing.module';

import { ItemPage } from './item.page';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'; /******* ergänzen ************/
import { ComponentModule } from '../components/component/component.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItemPageRoutingModule,
    ComponentModule
  ],
  declarations: [ItemPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ItemPageModule {}
