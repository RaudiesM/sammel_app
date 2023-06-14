import { Component } from '@angular/core';
import { GetDataService } from '../services/get-data.service';
import { datastructure } from '../tab1/tab1.page';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  listOfStructures : datastructure[] = [];
  currentStructure : number = -1;
  constructor(public getData : GetDataService) {}
  async ngOnInit() {
    this.listOfStructures = await this.getData.loadSaved();
    console.log(this.listOfStructures);
  }
}
