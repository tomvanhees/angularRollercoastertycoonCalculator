import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {RIDES} from '../data/rides.data';

@Injectable({
  providedIn: 'root'
})
export class RideService {

  constructor() {
  }
  get(): Observable<Array<any>>  {
    return of(RIDES);
  }
}
