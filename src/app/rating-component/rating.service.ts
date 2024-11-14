import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

@Injectable({ providedIn: "root" })
export class RatingService {
  private rating: number[] = [
    0,
    1.2,
    2.4,
    3.6,
    4.8,
    5.0
  ];

  fetchRating(): Observable<number> {
    return of(this.rating[3]);
  }
}
