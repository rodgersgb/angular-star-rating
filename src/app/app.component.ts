import { Component, OnInit } from '@angular/core';
import { RatingService, RatingStats } from './rating.service';

@Component({
  selector: 'my-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})
export class AppComponent implements OnInit{
  name = 'Angular';

  /// props ///
ratings: object | undefined ;
myRatings!: number[];
ratingPercentage: { rating: string, percentage: number }[] = [];


  constructor(private dataService: RatingService) {
  }
  ngOnInit(): void {
   this.dataService.fetchRatings().subscribe({
    next: (data: any): void => {
      this.ratings = data;
    }, error: (err): void => {
      console.log(err);
    }
   });

   
   this.calculateAverage(this.ratings);

  }

  /// functions ///
  calculateAverage(ratings: any): void {
    let stars:number[] = Object.values(ratings);
    var sum: number = stars.reduce((a, b)=> a + b, 0);
    
    for(const[rating, count] of Object.entries(ratings)) {
      let percentage = Math.round((Number(count) / sum ) * 100);

      this.ratingPercentage.push({rating, percentage})
    }
    
  }
}
