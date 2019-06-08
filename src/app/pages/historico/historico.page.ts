import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.page.html',
  styleUrls: ['./historico.page.scss'],
})
export class HistoricoPage implements OnInit {

  public monitorHistory: any;

  constructor(public navCtrl: NavController) {
    this.monitorHistory = [
      {
        corrente: 'Corrente: ', valorCorrente: 2,
        tensao: 'Tensão:', valorTensao: '220v',
        tempoAR: 'Tempo de A.A.:', valorAA: '4h32m21s',
      },
      {
        corrente: 'Corrente: ', valorCorrente: 5,
        tensao: 'Tensão:', valorTensao: '127v',
        tempoAR: 'Tempo de A.A.:', valorAA: '2h32m21s',
      },
      {
        corrente: 'Corrente: ', valorCorrente: 10,
        tensao: 'Tensão:', valorTensao: '220v',
        tempoAR: 'Tempo de A.A.:', valorAA: '1h32m21s',
      },
      {
        corrente: 'Corrente: ', valorCorrente: 12,
        tensao: 'Tensão:', valorTensao: '127v',
        tempoAR: 'Tempo de A.A.:', valorAA: '5h32m21s',
      },
      {
        corrente: 'Corrente: ', valorCorrente: 10,
        tensao: 'Tensão:', valorTensao: '220v',
        tempoAR: 'Tempo de A.A.:', valorAA: '1h32m21s',
      },
      {
        corrente: 'Corrente: ', valorCorrente: 12,
        tensao: 'Tensão:', valorTensao: '127v',
        tempoAR: 'Tempo de A.A.:', valorAA: '5h32m21s',
      }
    ]
  }

  ngOnInit() {
  }
}
