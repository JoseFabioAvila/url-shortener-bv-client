import { Component, OnInit } from '@angular/core';
import { UrlService } from '../shared/url.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-url',
  templateUrl: './create-url.component.html',
  styleUrls: ['./create-url.component.css']
})
export class CreateUrlComponent implements OnInit {

  urlForm: FormGroup;
  UrlArr: any = [];
  shortUrl: string;

  showSuccess = false;
  showError   = false;

  constructor(public fb: FormBuilder, public urlService: UrlService) { }

  ngOnInit() {
    this.addUrl();
  }

  addUrl() {
    this.urlForm = this.fb.group({
      full_url: ['']
    });
  }

  submitForm() {
    this.urlService.CreateUrl(this.urlForm.value).subscribe((res) => {
      if (res.status === 'success') {
        this.shortUrl = 'http://localhost:3000/' + res.short_code;
        this.showSuccess = true;
        this.showError = false;
      }
    }, (err) => {
      this.showError = true;
      this.showSuccess = false;
    });
  }

  refresh($event) {
    console.log('clear');
  }

}
