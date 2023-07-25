import { Component } from '@angular/core';
import { GetDataService } from '../services/get-data.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-structure',
  templateUrl: './add-structure.page.html',
  styleUrls: ['./add-structure.page.scss'],
})
export class AddStructurePage {
  newTitle : string = "";
  newInputs : dataValue[] = [];
  constructor(public getData : GetDataService, private alertController: AlertController, public router : Router) { }

  async ngOnInit() {
    this.newInputs.push({title: "Bezeichnung", field: "string"});
    this.newInputs.push({title: "Bilder", field: "images"})
  }

  ionViewWillEnter(){
    // console.log("updating");
    this.newInputs = [];
    this.ngOnInit(); 
  }

  saveInput(){
    
    var readyToSave : boolean = true;
    for(let inputs of this.newInputs){
      if(inputs.title == "" || inputs.field == "" || this.newTitle == ""){
        console.log("no save");
        readyToSave = false;
        break;
      }
    }
    if(readyToSave){
      this.newInputs.splice(1, 1);
      this.newInputs.push({title: "Bilder", field: "images"});
      var inputDataStruct : datastructure;
      var newID = this.getData.savedData.length;
      inputDataStruct = {
        id : newID,
        title: this.newTitle,
        date : new Date(),
        fields : this.newInputs
      };
      this.getData.saveInput(inputDataStruct);
      //console.log(inputDataStruct);
      //console.log(this.newInputs);
      this.emptyInputFields();
      this.presentAlert("New Structure created", "");
      this.router.navigate(['/tabs/startpage']);
    }else{
      // alert("Please fill out every input field");
      this.presentAlert("Incomplete Form!", "Please fill out every input field before saving.");
    }
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
    //console.log(i);
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

