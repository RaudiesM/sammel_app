import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  private collectionID :number = -1;
  constructor(public router : Router) { }

  public navigateTo(path : string){
    this.router.navigate([path]);
  }

  public setID(id : number){
    this.collectionID = id;
  }
  public getID(){
    return this.collectionID;
  }

}
