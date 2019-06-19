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

  public monitorHistory;
  public timePage = this.time;
  public datePage = this.date;

  constructor(public navCtrl: NavController, private providerService: ProviderService) {}

  ngOnInit() {
    this.providerService.getHistoryMonitor().subscribe(data => {
      const response = (data as any);
      const object = JSON.parse(response._body);
      this.monitorHistory = object.content[0];
    }, error => {
      console.log('error', error);
    });
  }
}