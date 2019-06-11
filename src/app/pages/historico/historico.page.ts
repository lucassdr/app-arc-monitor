import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.page.html',
  styleUrls: ['./historico.page.scss'],
})
export class HistoricoPage implements OnInit {
  public monitorHistory: any;
  public searchTerm: string = "";

  constructor(public navCtrl: NavController, private dataService: DataService) {
    
  }

  ngOnInit() {
    this.setFilteredItems();
  }

  setFilteredItems() {
    this.monitorHistory = this.dataService.filterItems(this.searchTerm);
  }

}
