import {Component, Input, OnInit} from '@angular/core';
import {RideType} from '../types/ride.type';
import {StatType} from '../types/stat.type';

@Component({
  selector: 'app-rct-table',
  templateUrl: './rct-table.component.html',
  styleUrls: ['./rct-table.component.scss']
})
export class RctTableComponent implements OnInit {

  private MULTIPLIERS = [1.5, 1.2, 1, 0.75, 0.56, 0.42, 0.32, 0.16, 0.08, 0.56];
  private AGE = ['<5', '<13', '<40', '<64', '<88', '<104', '<120', '<128', '<200', '>200'];

  public calculatedRidePrice = [];

  constructor() {
  }

  @Input()
  set ride(ride: RideType) {
    this._ride = ride;
    this.process();
  }

  get ride() {
    return this._ride;
  }

  @Input()
  set stats(stats: StatType) {
    this._stats = stats;
    this.process();
  }

  get stats() {
    return this._stats;
  }

  private _ride: RideType;

  private _stats: StatType;

  private static calculateValues(statValue: number, rideValue: number): number {

    return Math.floor(statValue * 100 * rideValue * 32 / 32768);
  }


  ngOnInit(): void {
  }

  process(): void {
    this.calculatedRidePrice = [];

    const baseValue = this.calculateBaseValue();

    for (let counter = 0; counter < this.MULTIPLIERS.length; counter++) {
      const value = Math.floor(baseValue * this.MULTIPLIERS[counter]);

      this.calculatedRidePrice.push({
        age: this.AGE[counter],
        multiplier: this.MULTIPLIERS[counter],
        rideValue: value,
        min_price: Math.round(value / 20.1),
        max_price: Math.round(value / 5)
      });
    }
  }


  private calculateExcitement(): number {
    return RctTableComponent.calculateValues(this.stats.excitement, this.ride.excitement);

  }

  private calculateIntensity(): number {
    return RctTableComponent.calculateValues(this.stats.intensity, this.ride.intensity);
  }

  private calculateNausea(): number {
    return RctTableComponent.calculateValues(this.stats.nausea, this.ride.nausea);
  }

  calculateBaseValue(): number {
    const baseValue = this.calculateExcitement() + this.calculateIntensity() + this.calculateNausea();

    if (this._stats.simular){
     return baseValue - Math.floor(baseValue / 4);
    }

    return baseValue;
  }

}
