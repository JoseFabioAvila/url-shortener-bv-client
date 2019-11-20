import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-top-hundred',
  templateUrl: './top-hundred.component.html',
  styleUrls: ['./top-hundred.component.css']
})
export class TopHundredComponent implements OnInit {

  constructor(private api: ApiService) {}

  urls: any = [];

  ngOnInit() {
    this.getTop100();
  }

  getTop100() {

    this.api.getTop100()
      .subscribe(response => {
        if (response.status === 'success') {
          for (const d of (response.urls as any)) {
            this.urls.push({
              title: d.title,
              full_url: d.full_url,
              short_code: d.short_code,
              click_count: d.click_count
            });
          }
          console.log(this.urls);
        }
      });
  }

}
