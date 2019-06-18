import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { ProviderService } from 'src/app/provider/provider.service';



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

  constructor(public navCtrl: NavController, private providerService: ProviderService) { }

  ngOnInit() {
    this.providerService.seeReportOfTwoDates().subscribe(data => {
      const response = (data as any);
      const object = JSON.parse(response._body);
      this.listHistory = object;
      console.log(this.listHistory);
    }, error => {
      console.log('error', error);
    })
  }
}

