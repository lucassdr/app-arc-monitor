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

  public nome_da_maquina:string = 'ArcDynamics 29';

  constructor(public navCtrl: NavController, private providerService: ProviderService) {
    
      console.log('this.nome', this.nomeFilme)
    
  }

  ngOnInit(){
    this.retornaListaDeFilmes();
    
  }

  retornaListaDeFilmes(){
    this.providerService.getHistoryMonitor().subscribe(
      data => {
        const response = (data as any);
        const objeto_retorno = JSON.parse(response._body);
        return objeto_retorno;
      }, error => {
        console.log(error)
      }
    )
  }

}