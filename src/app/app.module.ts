import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopHundredComponent } from './top-hundred/top-hundred.component';
import { CreateUrlComponent } from './create-url/create-url.component';

@NgModule({
  declarations: [
    AppComponent,
    TopHundredComponent,
    CreateUrlComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
