import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewsApiService {
  constructor(private _http: HttpClient) {}
  //Latest News Api
  newsApiUrl =
    'https://newsapi.org/v2/top-headlines?country=us&apiKey=a79f17dce11e4c768fbb741db0a7273d';

  //Technology News Api
  techNewsApi =
    'https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=a79f17dce11e4c768fbb741db0a7273d';

  //get api for "Latest news"
  topHeading(): Observable<any> {
    return this._http.get(this.newsApiUrl);
  }

  //get api for "Tech news"
  techNews(): Observable<any> {
    return this._http.get(this.techNewsApi);
  }
}
