import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ProviderService } from '../../provider/provider.service'


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

  public nomeFilme: any;
  public items: any;
  public machines: any;

  constructor(public navCtrl: NavController, private providerService: ProviderService) {
  }

  ionViewDidLoad(){
    this.providerService.getLastMovides().subscribe(
      data => {
        const response = (data as any);
        const objeto_retorno = JSON.parse(response._body);
        console.log('Response',objeto_retorno);
      }, error => {
        console.log(error)
      }
    )
  }

  // ionViewDidLoad() {
  //   return this.providerService.getLastMovides().subscribe(data => {
  //     let response = (data as any);
  //     let objeto_retorno = JSON.parse(response._body);
  //     console.log('objrtrn', objeto_retorno);
  //     return objeto_retorno;
  //   }, error => {
  //     console.log('error', error);
  //   });
  // }
  

}