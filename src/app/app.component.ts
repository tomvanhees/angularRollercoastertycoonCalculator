import {Component} from '@angular/core';
import {RideType} from './types/ride.type';
import {StatType} from './types/stat.type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-rollercoastertycoon-calculator';
  selectedRide = {
    id: 0,
    name: '',
    excitement: 0,
    intensity: 0,
    nausea: 0
  };
  selectedStats = {
    excitement: 0,
    intensity: 0,
    nausea: 0,
    simular: false,
  };

  setRide(ride: RideType) {
    this.selectedRide = ride;
  }

  setStats(stats: StatType) {
    this.selectedStats = stats;
  }

}
