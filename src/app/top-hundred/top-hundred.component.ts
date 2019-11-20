import { Component, OnInit } from '@angular/core';
import { UrlService } from '../shared/url.service';

@Component({
  selector: 'app-top-hundred',
  templateUrl: './top-hundred.component.html',
  styleUrls: ['./top-hundred.component.css']
})
export class TopHundredComponent implements OnInit {

  constructor(
    private urlService: UrlService
  ) {}

  urls: any = [];

  ngOnInit() {
    this.getTop100();
  }

  getTop100() {
    return this.urlService.GetTop100().subscribe(data => {
      if (data.status === 'success') {
        for (const url of (data.urls as any)) {
          this.urls.push({
            title: url.title,
            full_url: url.full_url,
            short_code: url.short_code,
            short_url: 'http://localhost:3000/' + url.short_code,
            click_count: url.click_count
          });
        }
      }
    });
  }

}
