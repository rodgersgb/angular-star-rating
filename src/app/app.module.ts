import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RatingComponent } from './rating-component/rating.component';

@NgModule({
  bootstrap: [AppComponent],
  imports: [BrowserModule, RatingComponent],
  declarations: [AppComponent],
})
export class AppModule {}
