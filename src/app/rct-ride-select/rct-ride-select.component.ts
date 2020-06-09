import {Component, Output, OnInit, EventEmitter} from '@angular/core';
import {RideService} from '../services/ride.service';
import {RideType} from '../types/ride.type';

@Component({
  selector: 'app-rct-ride-select',
  templateUrl: './rct-ride-select.component.html',
  styleUrls: ['./rct-ride-select.component.scss']
})
export class RctRideSelectComponent implements OnInit {
  rides: Array<any> = [];
  selectedRide: {};

  @Output() ride = new EventEmitter<RideType>();

  constructor(public rideService: RideService) {
  }

  ngOnInit(): void {
    this.rideService.get().subscribe(rides => this.rides = rides);
  }

  selectRide(id: string) {
    const parsedId = parseInt(id, 0);
    const selectedRide = this.rides.find(ride => ride.id === parsedId);
    this.ride.emit(selectedRide);
  }
}
