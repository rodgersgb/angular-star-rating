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
            five: getRandomInt(50),
            four: getRandomInt(40),
            three: getRandomInt(30),
            two: getRandomInt(20),
            one: getRandomInt(10),
        });
    }
}

function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
}