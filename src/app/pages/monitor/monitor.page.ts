import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import {ProviderService } from '../../provider/provider.service'


@Component({
  selector: 'app-monitor',
  templateUrl: './monitor.page.html',
  styleUrls: ['./monitor.page.scss'],
  providers: [
    ProviderService
  ]
})
export class MonitorPage {

  time = new Date().toLocaleTimeString();
  date = new Date().toLocaleDateString();

  public nomeFilme : any;
  public items: any;
  public machines: any;

  constructor(public navCtrl: NavController, private providerService : ProviderService) {
    this.ionViewDidLoad();
    console.log('nomeFilme const', this.nomeFilme);
    this.items = [
      { corrente: 'Corrente: ', valueCorrente: 2 },
      { tensao: 'Tensão:', valueTensao: '127v' },
      { mediaKwH: 'Média de Kw/h', valueMediaKwH: 'R$ 02,38' },
      { consumo: 'Consumo analisado: ', valueConsumo: 'R$ 12,29' },
      { hour: this.time, date: this.date },
    ],
      this.nomeFilme = [
        { name: this.nomeFilme }
      ]
  }


  ionViewDidLoad(){
    this.providerService.getLastMovides().subscribe( data => {
      const response = (data as any);
      const objeto_retorno = JSON.parse(response._body);
      console.log('objeto_retorno', objeto_retorno);
      this.nomeFilme = objeto_retorno.original_title;
      console.log('nomeFilme ion', this.nomeFilme);
    }, error => {
      console.log('error', error);
    })
  }

}