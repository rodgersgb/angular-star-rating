import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface RatingStats {
    one: number;
    two: number;
    three: number;
    four: number;
    five: number;
}

@Injectable({ providedIn: 'root' })
export class RatingService {
    constructor() { }

    fetchRatings(): Observable<RatingStats> {
        return of({
            five: 50,
            four: 40,
            three: 30,
            two: 20,
            one: 10,
        });
    }
}

function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
}