import { Component, OnInit } from '@angular/core';
import { NewsApiService } from '../service/news-api.service';

@Component({
  selector: 'app-topheading',
  templateUrl: './topheading.component.html',
  styleUrls: ['./topheading.component.css'],
})
export class TopheadingComponent implements OnInit {
  topHeadingDisplay: any[];

  constructor(private _services: NewsApiService) {}

  ngOnInit(): void {
    this._services.topHeading().subscribe((result) => {
      console.log(result);
      this.topHeadingDisplay = result.articles;
    });
  }
}
