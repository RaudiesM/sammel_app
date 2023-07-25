import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
})
export class LogoComponent  implements OnInit {

  constructor(public navigator : NavigationService) { }

  ngOnInit() {}

  linkToStartpage(){
    this.navigator.navigateTo("startpage");
  }

}
