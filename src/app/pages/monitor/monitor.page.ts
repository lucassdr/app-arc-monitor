import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-monitor',
  templateUrl: './monitor.page.html',
  styleUrls: ['./monitor.page.scss'],
})
export class MonitorPage {
  public items: any;
  public machines: any;
  constructor(public navCtrl: NavController) {
    this.items = [
      { title: 'Corrente: ', valor: 2 },
      { title: 'Tensão:', valor: '127v' },
      { title: 'Tempo de A.A.: ', valor: '2h32m21s' },
    ],
      this.machines = [
        { title: 'Máquina de soldagem Arc2350' }
      ]
  }
}