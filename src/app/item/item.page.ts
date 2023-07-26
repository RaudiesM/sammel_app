import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../services/get-data.service';
import { datastructure } from '../add-structure/add-structure.page';
import { NavigationService } from '../services/navigation.service';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.page.html',
  styleUrls: ['./item.page.scss'],
})
export class ItemPage implements OnInit {
  savedItems : any[] = [];
  orderedItems : any[] = [];
  collection : datastructure[] = [];
  currentID : number = -1;
  currentItemID : number = -1;
  constructor(public getData : GetDataService, public navigator : NavigationService, public photoService : PhotoService) { }

  async ngOnInit() {
    this.currentID = this.navigator.getID();
    this.currentItemID = this.navigator.getItemID();
    this.collection = this.getData.savedData;
    //get ID --> get title to get Items
    this.savedItems = await this.getData.loadItems(this.collection[this.currentID].title);
    this.switchItems();
    // console.log(this.savedItems[0]);
    for(let item of this.savedItems){
      var i  =-1;
      for(let coll of this.collection[this.currentID].fields){
        i++;
        //console.log(coll.title + ": " + item[i])
      }
    }
  }

  async switchItems(){
    var newItems : any[] = [];
    if(this.currentItemID < 0 ){
      this.currentItemID = 0;
    }
    this.orderedItems = this.savedItems;
    // console.log(this.savedItems);
    newItems = this.orderedItems.slice(this.currentItemID, this.savedItems.length);
    // console.log("1. Schritt:");
    // console.log(newItems);
    for(let i = 0; i < this.currentItemID; i++){
      newItems.push(this.savedItems[i]);
    }
    this.orderedItems = newItems;
    for(let item of this.orderedItems){
      item[item.length-1][0] = await this.photoService.readImagesFromFilesystem(item[item.length-1][0]);
      }
    
    // console.log(this.orderedItems);
  }

  ionViewWillEnter(){
    // console.log("updating");
    this.ngOnInit(); 
    for(let content of this.collection[this.currentID].fields){
      console.log(content);
    }
  }
}
