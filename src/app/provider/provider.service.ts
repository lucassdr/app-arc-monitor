import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class ProviderService {

  private apiKey = '=04906ce9bd401a06cc5e87a386c6eac0'

  private basePathUrl = 'https://api.themoviedb.org';

  private urlComplete = 'https://api.themoviedb.org/3/movie/550?api_key=04906ce9bd401a06cc5e87a386c6eac0';

  private urlCompleteGetOne = 'https://api.themoviedb.org/3/movie/12?api_key=04906ce9bd401a06cc5e87a386c6eac0&language=en-US';

  constructor(public http:Http) { }

  getLastMovides() {
    return this.http.get(this.urlComplete);
    // return this.http.get(this.basePathUrl + '/3/movie/550?apiKey' + this.apiKey);
  }

}
