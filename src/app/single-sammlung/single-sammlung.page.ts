import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../services/navigation.service';
import { GetDataService } from '../services/get-data.service';
import { datastructure } from '../add-structure/add-structure.page';

@Component({
  selector: 'app-single-sammlung',
  templateUrl: './single-sammlung.page.html',
  styleUrls: ['./single-sammlung.page.scss'],
})
export class SingleSammlungPage{
  currentID : number = -1;
  currentCollection : datastructure[] = [];
  currTitle = "Titel";
  isLoaded : boolean = false;
  myItems : any;
  constructor(public navigator : NavigationService, public getData : GetDataService) { 
    this.init(); 
   }

  async init() {
    // console.log(this.currentID);
    this.currentID = this.navigator.getID();
    this.currentCollection = await this.getData.loadCollections();
    this.myItems = await this.getData.loadItems(this.currentCollection[this.currentID].title);
    if(this.myItems == null){
      var newItems : any = {};
      this.myItems = newItems;
    }
    console.log("______________________________________________________________________");
    console.log(this.myItems);
    console.log("______________________________________________________________________");
    }

    ionViewWillEnter(){
      console.log("updating");
      this.init(); 
    }

    getID(){
      this.currentID = this.navigator.getID();
      return this.currentID;
    }
}
