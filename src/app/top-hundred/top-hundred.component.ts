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
        this.urls = data.urls;
      }
    });
    // this.urlService.GetTop100()
    //   .subscribe(response => {
    //     console.log(response);
    //     // if (response.status === 'success') {
    //     //   for (const d of (response.urls as any)) {
    //     //     this.urls.push({
    //     //       title: d.title,
    //     //       full_url: d.full_url,
    //     //       short_code: d.short_code,
    //     //       click_count: d.click_count
    //     //     });
    //     //   }
    //     //   console.log(this.urls);
    //     // }
    //   });
  }

}
