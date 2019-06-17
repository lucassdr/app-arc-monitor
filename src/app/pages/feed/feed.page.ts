import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { ProviderService } from 'src/app/provider/provider.service';
// import { Network } from '@ionic-native/network/ngx';
import { Network } from '@ionic-native/network/ngx';



@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
  providers: [
    ProviderService,
    Network
  ]
})
export class FeedPage implements OnInit {

  public lista_filmes = new Array<any>();
  public listHistory = new Array<any>();

  constructor(public navCtrl: NavController, private providerService: ProviderService, public network: Network) { }

  ngOnInit() {
    this.providerService.getHistoryMonitor().subscribe(data => {
      const response = (data as any);
      const object = JSON.parse(response._body);
      this.listHistory = object.content;
    }, error => {
      console.log('error', error);
    })
  }
}

