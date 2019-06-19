import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { ProviderService } from 'src/app/provider/provider.service';
import { Http } from '@angular/http';



@Component({
  selector: 'app-calculo',
  templateUrl: './calculo.page.html',
  styleUrls: ['./calculo.page.scss'],
  providers: [
    ProviderService,
  ]
})
export class CalculoPage implements OnInit {

  public listHistory = new Array<any>();

  private dataInicio;
  private dataFim;

  constructor(public navCtrl: NavController, private providerService: ProviderService, public http: Http) { }

  ngOnInit() {
    this.seeReportOfTwoDates().subscribe(data => {
      const response = (data as any);
      const object = JSON.parse(response._body);
      this.listHistory = object;
    }, error => {
      console.log('error', error);
    })
  }

  seeReportOfTwoDates(){
    return this.http.get(`http://192.168.0.103:8080/monitoring/report?dataIni=${this.dataInicio}&dataFim=${this.dataFim}`);
  }
}

