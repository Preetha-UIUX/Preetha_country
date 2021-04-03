import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class HttpDataService {


  constructor(private http: HttpClient) { }

  get(url: string) {
    let baseUrl = environment.countryUrl + url;
    return this.http.get(baseUrl);
  }

  post(url: string,data: any) {
    let baseUrl = environment.countryUrl + url;
    return this.http.post(baseUrl,data)
  }

  getStates(url: string) {
    let baseUrl = environment.cityUrl + url;
    return this.http.get(baseUrl);
  }

}
