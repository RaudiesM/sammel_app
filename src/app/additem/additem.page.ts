import { Component } from '@angular/core';
import { GetDataService } from '../services/get-data.service';
import { datastructure } from '../add-structure/add-structure.page';


@Component({
  selector: 'app-additem',
  templateUrl: './additem.page.html',
  styleUrls: ['./additem.page.scss'],
})
export class AdditemPage{
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
