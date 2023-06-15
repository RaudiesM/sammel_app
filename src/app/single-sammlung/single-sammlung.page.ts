import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../services/navigation.service';
import { GetDataService } from '../services/get-data.service';
import { datastructure } from '../add-structure/add-structure.page';

@Component({
  selector: 'app-single-sammlung',
  templateUrl: './single-sammlung.page.html',
  styleUrls: ['./single-sammlung.page.scss'],
})
export class SingleSammlungPage implements OnInit {
  currentID : number = -1;
  currentCollection : datastructure[] = [];
  currTitle = "Titel";
  isLoaded : boolean = false;
  constructor(public navigator : NavigationService, public getData : GetDataService) { 
    this.init(); 
   }

   ngOnInit(): void {
    console.log("currendID: "+this.currentID);
   }

  async init() {
    console.log(this.currentID);
    this.currentCollection = await this.getData.loadCollections();
    this.isLoaded = true;
    }

    getID(){
      this.currentID = this.navigator.getID();
      return this.currentID;
    }


}
