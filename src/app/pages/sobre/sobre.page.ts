import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.page.html',
  styleUrls: ['./sobre.page.scss'],
})
export class SobrePage {

  public team: any;
  public arcMonitoDescription:any;
  constructor(public navCtrl: NavController) {
    this.team = [
      { name: 'Lucas', course: 'Sistema de Informação', period: '7º período' },
      { name: 'Ricardo', course: 'Sistema de Informação', period: '8º período' },
    ],
    this.arcMonitoDescription = [
      {nameOfSolution:'ArcMonitor', createBy:'MIG, agentes de preto', licensedFor:'ArcDynamics'},
    ]
  }

}
