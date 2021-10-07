import { Component, OnInit } from '@angular/core';
import { NewsApiService } from '../service/news-api.service';

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.css'],
})
export class TechComponent implements OnInit {
  techNewsDisplay: any = [];
  constructor(private _service: NewsApiService) {}

  ngOnInit(): void {
    this._service.techNews().subscribe((result) => {
      this.techNewsDisplay = result.articles;
    });
  }
}
