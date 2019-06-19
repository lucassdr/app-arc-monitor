import { Injectable, Component } from '@angular/core';
import { Http } from '@angular/http';



// @Injectable({
//   providedIn: 'root'
// })


@Injectable()
export class ProviderService {


  private urlGetDataFromAPiIP = 'http://192.168.0.103:8080/monitoring/page';

  private dataIni = '2016-02-17';
  private dataFim = '2016-10-17';

  private urlGetReportFromTwoDatesIP = `http://192.168.0.103:8080/monitoring/report?dataIni=${this.dataIni}&dataFim=${this.dataFim}`;

  constructor(public http: Http) {
    this.getHistoryMonitor();
    this.seeReportOfTwoDates();
  }

  getHistoryMonitor(){
    // return this.http.get(this.urlGetDataFromAPi);
    console.log('urlGetDataFromAPiIP' + this.urlGetDataFromAPiIP);
    return this.http.get(this.urlGetDataFromAPiIP);
  }

  seeReportOfTwoDates(){
    console.log('urlGetDataFromAPiIP' + this.urlGetReportFromTwoDatesIP);
    // return this.http.get(this.urlGetReportFromTwoDates);
    return this.http.get(this.urlGetReportFromTwoDatesIP);
  }
}