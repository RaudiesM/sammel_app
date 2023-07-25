import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  private collectionID :number = -1;
  private itemID : number = -1;
  constructor(public router : Router) { }

  public navigateTo(path : string){
    var goal : string = '';
    if(path == "single-sammlung"){
      goal = '/tabs/single-sammlung';
    }else if(path == "startpage"){
      goal = '/tabs/startpage';
    }
    // goal = '/tabs/single-sammlung';
    this.router.navigate([goal]);
  }

  public setID(id : number){
    this.collectionID = id;
  }
  public getID(){
    return this.collectionID;
  }
  public setItemID(id : number){
    this.itemID = id;
  }
  public getItemID(){
    return this.itemID;
  }

}
