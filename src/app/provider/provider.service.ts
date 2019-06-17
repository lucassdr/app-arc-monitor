import { Injectable, Component } from '@angular/core';
import { Http } from '@angular/http';

// @Injectable({
//   providedIn: 'root'
// })


@Injectable()
export class ProviderService {

  private urlGetDataFromAPi = 'http://localhost:8080/monitoring/page';

  constructor(public http: Http) {
    console.log('Hello ProviderService');
  }

  getHistoryMonitor(){
    return this.http.get(this.urlGetDataFromAPi);
  }

}
