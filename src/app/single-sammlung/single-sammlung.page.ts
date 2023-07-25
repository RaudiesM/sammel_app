import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../services/navigation.service';
import { GetDataService } from '../services/get-data.service';
import { datastructure } from '../add-structure/add-structure.page';
import { PhotoService, UserPhoto } from '../services/photo.service';
import { Filesystem } from '@capacitor/filesystem';
import { Directory } from '@capacitor/filesystem';

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
  myItems : any[] = [];
  myImages : UserPhoto[] = []
  
  constructor(public navigator : NavigationService, public getData : GetDataService, public photoService : PhotoService) { 
    this.init(); 
   }

  async init() {
    // console.log(this.currentID);
    this.currentID = this.navigator.getID();
    // console.log(this.currentID);
    if(this.currentID == undefined || this.currentID <0){
      this.navigator.navigateTo("startpage");
    }
    this.currentCollection = await this.getData.loadCollections();
    this.myItems = await this.getData.loadItems(this.currentCollection[this.currentID].title);
    if(this.myItems == null){
      var newItems : any = {};
      this.myItems = newItems;
    }
    // console.log("______________________________________________________________________");
    // console.log(this.myItems);
    // console.log("______________________________________________________________________");
    
      this.isLoaded = true;
      this.getImagesFromStructure();
    }
    
    async getImagesFromStructure(){
      this.myImages = [];
      for(let items of this.myItems){
        this.myImages.push(items[1][0])
      }
      for (let photo of this.myImages) {
        photo = await this.photoService.readImagesFromFilesystem(photo);
      }
    }

    ionViewWillEnter(){
      // console.log("updating");
      this.init(); 
    }

    getID(){
      this.currentID = this.navigator.getID();
      return this.currentID;
    }
    setItemID(id: number){
      this.navigator.setItemID(id);
      console.log("ID set to "+id);
    }
}
