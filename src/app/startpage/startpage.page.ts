import { Component, DebugElement, OnInit } from '@angular/core';
import { GetDataService } from '../services/get-data.service';
import { datastructure } from '../add-structure/add-structure.page';
import { NavigationService } from '../services/navigation.service';

@Component({
  selector: 'app-startpage',
  templateUrl: './startpage.page.html',
  styleUrls: ['./startpage.page.scss'],
})

export class StartpagePage{
  public collections : datastructure[] = []
  public numberOfItems : Array<number> = [];
  constructor(public getData : GetDataService, public navigator:NavigationService) {
    this.init(); 
   }

  async init() {
    // console.log("load collections");
    this.collections = await this.getData.loadCollections(); // DATENBANK anlegen!?
  	await this.countItems();
    console.log(this.collections);
    console.log(this.numberOfItems)
    }

  navigateTo(aim : number){
    this.navigator.setID(aim);
    this.navigator.navigateTo('single-sammlung');
  }

  async countItems(){
    for(var collection of this.collections){
      console.log(await this.getData.countItems(collection.title))
      this.numberOfItems.push(await this.getData.countItems(collection.title));

    }
  }
}
