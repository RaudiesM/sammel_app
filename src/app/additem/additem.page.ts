import { Component } from '@angular/core';
import { GetDataService } from '../services/get-data.service';
import { datastructure } from '../add-structure/add-structure.page';
import { NavigationService } from '../services/navigation.service';
import { PhotoService } from '../services/photo.service';
import { UserPhoto } from '../services/photo.service';



@Component({
  selector: 'app-additem',
  templateUrl: './additem.page.html',
  styleUrls: ['./additem.page.scss'],
})
export class AdditemPage{
  listOfStructures : datastructure[] = [];
  currentStructure : number = this.navigator.getID();
  isLoaded : boolean = false;
  content : any[] = [];
  photos : UserPhoto[] = [];
  
  constructor(public getData : GetDataService, public navigator : NavigationService, public photoService: PhotoService) {}
  ngOnInit() {
    // Die Daten der Sammlungen laden
    this.loadCollections();
    this.currentStructure = this.navigator.getID();
    if(this.currentStructure <0 || this.currentStructure == undefined){
      this.navigator.navigateTo("startpage");
    }
    this.photos = [];
    }

    async addPhotoToGallery(i : number){
      const savedImageFile = await this.photoService.getImage();
      if(typeof savedImageFile.webviewPath === "string"){
        this.photos.unshift(savedImageFile);
      }
      // console.log(this.photos);
      this.content[i] = this.photos;
      // console.log(this.content[i]);
    }
   
    async loadCollections(){
      try {
        this.listOfStructures = await this.getData.loadCollections();
        this.onCollectionsLoaded();
      } catch (error) {
        console.error(error);
      }
   }

    onCollectionsLoaded(){
      this.isLoaded = true;
    }
    
    getID(){
      this.currentStructure = this.navigator.getID();
      return this.currentStructure;
    }

    // obj: Record<string,any>[] = [{}];
    rearangeData(){
      this.getData.saveItems(this.listOfStructures[this.getID()].title, this.content)
      this.content = [];
      this.photos = [];
    }
  }