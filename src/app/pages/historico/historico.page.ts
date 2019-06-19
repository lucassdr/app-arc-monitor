import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ProviderService } from 'src/app/provider/provider.service';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.page.html',
  styleUrls: ['./historico.page.scss'],
  providers: [
    ProviderService
  ]
})
export class HistoricoPage implements OnInit {
  public monitorHistory: any;

  constructor(public navCtrl: NavController, private providerService: ProviderService) {
    // Dados fixados
    this.monitorHistory = [
      {
        id: 1,
        corrente: 8,
        tensao: 193,
        registroData: "23/09/2010"
      },
      {
        id: 2,
        corrente: 9,
        tensao: 183,
        registroData: "16/06/2006"
      },
      {
        id: 3,
        corrente: 4,
        tensao: 13,
        registroData: "29/06/2014"
      },
      {
        id: 4,
        corrente: 2,
        tensao: 25,
        registroData: "11/11/2015"
      },
      {
        id: 5,
        corrente: 4,
        tensao: 77,
        registroData: "16/07/2018"
      },
      {
        id: 6,
        corrente: 5,
        tensao: 41,
        registroData: "29/10/2003"
      },
      {
        id: 7,
        corrente: 0,
        tensao: 148,
        registroData: "23/06/2009"
      },
      {
        id: 8,
        corrente: 4,
        tensao: 207,
        registroData: "25/10/2005"
      },
      {
        id: 9,
        corrente: 1,
        tensao: 168,
        registroData: "26/11/2009"
      },
      {
        id: 10,
        corrente: 5,
        tensao: 120,
        registroData: "26/07/2010"
      },
      {
        id: 11,
        corrente: 5,
        tensao: 2,
        registroData: "12/04/2003"
      },
      {
        id: 12,
        corrente: 5,
        tensao: 39,
        registroData: "30/12/2006"
      },
      {
        id: 13,
        corrente: 4,
        tensao: 137,
        registroData: "28/06/2017"
      },
      {
        id: 14,
        corrente: 3,
        tensao: 130,
        registroData: "28/01/2012"
      },
      {
        id: 15,
        corrente: 9,
        tensao: 19,
        registroData: "10/07/2010"
      },
      {
        id: 16,
        corrente: 6,
        tensao: 55,
        registroData: "30/07/2014"
      },
      {
        id: 17,
        corrente: 5,
        tensao: 12,
        registroData: "04/08/2010"
      },
      {
        id: 18,
        corrente: 5,
        tensao: 148,
        registroData: "14/11/2005"
      },
      {
        id: 19,
        corrente: 8,
        tensao: 55,
        registroData: "29/08/2006"
      },
      {
        id: 20,
        corrente: 2,
        tensao: 48,
        registroData: "11/02/2011"
      },
      {
        id: 21,
        corrente: 1,
        tensao: 213,
        registroData: "28/03/2011"
      },
      {
        id: 22,
        corrente: 2,
        tensao: 131,
        registroData: "02/07/2017"
      },
      {
        id: 23,
        corrente: 7,
        tensao: 46,
        registroData: "22/10/2010"
      },
      {
        id: 24,
        corrente: 5,
        tensao: 146,
        registroData: "02/07/2009"
      }
    ]
    //Dados fixados
  }
  //Dados fixados
  ngOnInit() { }

  // Dados do servidor
  // ngOnInit() {
  //   this.providerService.getHistoryMonitor().subscribe(data => {
  //     const response = (data as any);
  //     const object = JSON.parse(response._body);
  //     this.monitorHistory = object.content;
  //   }, error => {
  //     console.log('error', error);
  //   });
  // }

}
