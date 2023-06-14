import { Component } from '@angular/core';
import { GetDataService } from '../services/get-data.service';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  newTitle : string = "";
  newInputs : dataValue[] = [];
  // newInputs = <dataValue[]>[];
  // newInputs = [] as dataValue[];
  // newInputs = new Array<dataValue>();

  
  // newDataStruct : datastructure[] = [];
  constructor(public getData : GetDataService, private alertController: AlertController) {}
  
  async ngOnInit() {
    this.newInputs.push({title: "", field: ""});
    
    var stuff;
    stuff = await this.getData.loadSaved();
    console.log(stuff);
  }

  saveInput(){
    var readyToSave : boolean = true;
    for(let inputs of this.newInputs){
      if(inputs.title == "" || inputs.field == ""){
        console.log("no save");
        readyToSave = false;
        break;
      }
    }
    if(readyToSave){
      var inputDataStruct : datastructure;
      var newID = this.getData.savedData.length;
      inputDataStruct = {
        id : newID,
        title: this.newTitle,
        date : new Date(),
        fields : this.newInputs
      };
      // this.newDataStruct.push(inputDataStruct);
      this.getData.saveInput(inputDataStruct);
      console.log(inputDataStruct);
      // console.log(this.newInputs);
      this.emptyInputFields();
      this.presentAlert("New Structure created", "");
    }else{
      // alert("Please fill out every input field");
      this.presentAlert("Incomplete Form!", "Please fill out every input field before saving.");
    }
  }

  

  clearInput(){
    this.getData.clearAll();
  }

  emptyInputFields(){
    this.newTitle = "";
    this.newInputs = new Array<dataValue>();
    this.newInputs.push({title: "", field: ""});
  }

  increaseInputs(){
    var newestInput : dataValue;
    newestInput = {
      title:"",
      field:""
    }
    this.newInputs.push(newestInput);
  }
  decreaseInputs(i:number){
    // delete this.newInputs[i];
    this.newInputs.splice(i, 1);
    console.log(i);
  }

  async presentAlert(alertHeader : string, alertText : string) {
    const alert = await this.alertController.create({
      header: alertHeader,
      message: alertText,
      buttons: ['OK'],
    });
    await alert.present();
  }

}
export interface dataValue{
  title: string,
  field: string
}
export interface datastructure {
  id : number,
  title : string,
  date : Date,
  fields:dataValue[]
}