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
  ngOnInit() {
    // Die Daten der Sammlungen laden
    this.loadCollections();
    }
   async loadCollections(): Promise<void> {
    try {
    this.listOfStructures = await this.getData.loadCollections();
    // Notify the calling object that the operation is complete
    this.onCollectionsLoaded();
    } catch (error) {
    console.error(error);
    }
    }
   onCollectionsLoaded(): void {
    console.log('Daten über die Sammlungen wurden geladen');
    }
}
