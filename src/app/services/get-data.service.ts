import { Injectable } from '@angular/core';

import { datastructure } from '../add-structure/add-structure.page';
import { Storage } from '@ionic/storage-angular';



@Injectable({
  providedIn: 'root'
})


export class GetDataService {
  // public ds_names: string[] = [];
  public savedData : datastructure[] = [];
  public savedItems : any[] = [];
  private DATA_STORAGE: string = 'mi';
  
  constructor(private storage: Storage) {
    console.log("Constructor GetDataService");
    this.init(); 
  }

  async init() {
    console.log("init GetDataService");
    await this.storage.create(); // DATENBANK anlegen!?
    }

  public async saveInput(ds : datastructure){
    this.savedData.push(ds);
    this.saveCollections();
  }
  public async saveItems(title : string, content : any){
    this.savedItems.push(content);
    this.saveCollectionItems(title);
  }

  async saveCollections() {
    await this.storage.set("mi", this.savedData);
    console.log("saveCollections getDateService");
    }
  async saveCollectionItems(title : string){
    await this.storage.set(title, this.savedItems);
    console.log("item saved");
  }

  public async clearAll(){
    //Preferences.clear();
    await this.storage.clear();
    console.log("cleared")
  }

  async loadCollections() {
    var data = await this.storage.get("mi");
    if (data == null) {
      console.log("Keine Sammlungen gespeichert!");
      this.saveCollections();
    } 
    else{
      this.savedData = data;
      console.log(" Sammlungen geladen");
      console.log(this.savedData);
      this.saveCollections();
    }
    return data;
  }

  async loadItems(title : string) {
    var data = await this.storage.get(title);
    if (data == null) {
      console.log("Keine Sammlungen gespeichert!");
      this.saveCollectionItems(title);
    } 
    else{
      this.savedItems = data;
      console.log(" Sammlungen geladen");
      console.log(this.savedItems);
      this.saveCollectionItems(title);
    }
    return data;
  }

}

