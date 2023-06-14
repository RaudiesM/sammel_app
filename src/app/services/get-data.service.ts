import { Injectable } from '@angular/core';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';
import { datastructure } from '../tab1/tab1.page';
import { Storage } from '@ionic/storage-angular';



@Injectable({
  providedIn: 'root'
})


export class GetDataService {
  // public ds_names: string[] = [];
  public savedData : datastructure[] = [];
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

  async saveCollections() {
    await this.storage.set("mi", this.savedData);
    console.log("saveCollections getDateService");
    }

  public async clearAll(){
    //Preferences.clear();
    console.log("not yet implemented, genius!")
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

}
