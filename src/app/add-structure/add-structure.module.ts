import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddStructurePageRoutingModule } from './add-structure-routing.module';

import { AddStructurePage } from './add-structure.page';
import { ComponentModule } from '../components/component/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddStructurePageRoutingModule,
    ComponentModule
  ],
  declarations: [AddStructurePage]
})
export class AddStructurePageModule {}
