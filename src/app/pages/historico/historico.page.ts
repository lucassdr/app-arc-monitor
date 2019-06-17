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
  public searchTerm: string = "";

  constructor(public navCtrl: NavController, private providerService: ProviderService) {

  }

  ngOnInit() {
    this.providerService.getHistoryMonitor().subscribe(data => {
      const response = (data as any);
      const object = JSON.parse(response._body);
      this.monitorHistory = object.content;
    }, error => {
      console.log('error', error);
    });
    // this.setFilteredItems();
  }

  // setFilteredItems() {
  //   this.monitorHistory = this.dataService.filterItems(this.searchTerm);
  // }

}
