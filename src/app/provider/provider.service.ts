import { Injectable, Component } from '@angular/core';
import { Http } from '@angular/http';

// @Injectable({
//   providedIn: 'root'
// })


@Injectable()
export class ProviderService {

  private urlGetDataFromAPi = 'http://localhost:8080/monitoring/page';
  private urlGetReportFromTwoDates = 'http://localhost:8080/monitoring/report?dataIni=2016-02-17&dataFim=2019-02-17';

  constructor(public http: Http) {
    console.log('Hello ProviderService');
  }

  getHistoryMonitor(){
    return this.http.get(this.urlGetDataFromAPi);
  }

  seeReportOfTwoDates(){
    return this.http.get(this.urlGetReportFromTwoDates);
  }

}
