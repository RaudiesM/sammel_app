import { Component } from '@angular/core';
import { GetDataService } from '../services/get-data.service';
import { datastructure } from '../add-structure/add-structure.page';
import { NavigationService } from '../services/navigation.service';


@Component({
  selector: 'app-additem',
  templateUrl: './additem.page.html',
  styleUrls: ['./additem.page.scss'],
})
export class AdditemPage{
  listOfStructures : datastructure[] = [];
  currentStructure : number = this.navigator.getID();
  isLoaded : boolean = false;
  content : any[] = [];
  constructor(public getData : GetDataService, public navigator : NavigationService) {}
  ngOnInit() {
    // Die Daten der Sammlungen laden
    this.loadCollections();
    this.currentStructure = this.navigator.getID();
    console.log("currentStructure = "+this.currentStructure);
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
    this.isLoaded = true;
    console.log('Daten über die Sammlungen wurden geladen');
    }
    getID(){
      this.currentStructure = this.navigator.getID();
      return this.currentStructure;
    }

    // obj: Record<string,any>[] = [{}];
    rearangeData(){
      var obj = {};
      var i : number = -1;
      console.log("MyContent: "+this.content)
      for(let field of this.listOfStructures[this.getID()].fields){
        // console.log("aufzählung: "+field.title);
        i++;
        obj = Object.assign(obj, { [field.title]: this.content[i] });
      }
      console.log(obj);
      this.getData.saveItems(this.listOfStructures[this.getID()].title, obj)
    }
  }