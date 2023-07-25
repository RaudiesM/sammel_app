import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../services/get-data.service';
import { datastructure } from '../add-structure/add-structure.page';
import { NavigationService } from '../services/navigation.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.page.html',
  styleUrls: ['./item.page.scss'],
})
export class ItemPage implements OnInit {
  savedItems : any[] = [];
  collection : datastructure[] = [];
  currentID : number = -1;
  constructor(public getData : GetDataService, public navigator : NavigationService) { }

  async ngOnInit() {
    this.currentID = this.navigator.getID();
    this.collection = this.getData.savedData;
    this.collection[this.currentID].title; //get ID --> get title to get Items
    this.savedItems = await this.getData.loadItems(this.collection[this.currentID].title);
    // console.log(this.savedItems);
    // console.log(this.collection[0].fields); 
    for(let item of this.savedItems){
      var i  =-1;
      // console.log("______________________");
      // console.log(item);
      // console.log("______________________");
      for(let coll of this.collection[this.currentID].fields){
        i++;
        console.log(coll.title + ": " + item[i])
      }

    }
  }

  ionViewWillEnter(){
    // console.log("updating");
    this.ngOnInit(); 
  }

}
