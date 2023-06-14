import { Injectable } from '@angular/core';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';
import { datastructure } from '../tab1/tab1.page';



@Injectable({
  providedIn: 'root'
})


export class GetDataService {
  // public ds_names: string[] = [];
  public savedData : datastructure[] = [];
  private DATA_STORAGE: string = 'mi';
  constructor() { }

  // public async addInput(ds : datastructure){
  //   this.ds_names = ds;
  //   // console.log(name);
  //   this.saveInput();
  // }

  public async saveInput(ds : datastructure){
    this.savedData.push(ds);
    
    Preferences.set({
      key: this.DATA_STORAGE,
      value: JSON.stringify(this.savedData),
    });
  }

  public async clearAll(){
    Preferences.clear();
  }

  public async loadSaved() {
    const { value } = await Preferences.get({ key: this.DATA_STORAGE });
    let ds_output;
    ds_output = (value ? JSON.parse(value) : []) as datastructure[];
    this.savedData = ds_output;
    return ds_output
    // more to come...
    // Preferences.clear();
  }

}
