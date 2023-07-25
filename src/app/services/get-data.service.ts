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
    //console.log("Constructor GetDataService");
    this.init(); 
  }

  async init() {
    //console.log("init GetDataService");
    await this.storage.create(); // DATENBANK anlegen!?
    //this.clearAll();
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
    }

  async saveCollectionItems(title : string){
    await this.storage.set(title, this.savedItems);
  }

  public async clearAll(){
    await this.storage.clear();
  }

  async loadCollections() {
    var data = await this.storage.get("mi");
    if (data == null) {
      // console.log("Keine Sammlungen gespeichert!");
      this.saveCollections();
    } 
    else{
      this.savedData = data;
      // console.log(" Sammlungen geladen");
      // console.log(this.savedData);
      this.saveCollections();
    }
    return data;
  }

  async loadItems(title : string) {
    var data = await this.storage.get(title);
    if (data == null) {
      // console.log("Keine Items gespeichert!");
      if(this.savedItems.length >0){
        var newItems : any[] = [];
        this.savedItems = newItems;
        this.saveCollectionItems(title);
      }
      // console.log(this.savedItems);
    } 
    else{
      this.savedItems = data;
      // console.log(" Items geladen");
      // console.log(this.savedItems);
      // console.log("loaded from "+title);
      this.saveCollectionItems(title);
    }
    return data;
  }
  async countItems(title: string){
    var newCollection : any[] = await this.loadItems(title);
    return newCollection.length;
  }

  async loadImages(){

  }

}

