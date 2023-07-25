import { Component, OnInit } from '@angular/core';
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
  constructor(public getData : GetDataService, public navigator:NavigationService) {
    this.init(); 
   }


  async init() {
    // console.log("load collections");
    this.collections = await this.getData.loadCollections(); // DATENBANK anlegen!?
    }

  navigateTo(aim : number){
    this.navigator.setID(aim);
    this.navigator.navigateTo('single-sammlung');
  }

}
