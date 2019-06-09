import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.page.html',
  styleUrls: ['./sobre.page.scss'],
})
export class SobrePage {

  public team: any;
  constructor(public navCtrl: NavController) {
    this.team = [
      { name: 'Lucas', age: 23, period: '7º período' },
      { name: 'Ricardo', age: 99, period: '8º período' },
    ]
  }

}
