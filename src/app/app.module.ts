import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TopheadingComponent } from './topheading/topheading.component';
import { NewsApiService } from './service/news-api.service';
import { TechComponent } from './tech/tech.component';
@NgModule({
  declarations: [AppComponent, TopheadingComponent, TechComponent],
  imports: [BrowserModule, AppRoutingModule, NgbModule, HttpClientModule],
  providers: [NewsApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
