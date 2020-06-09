import {Component, Output, OnInit, EventEmitter} from '@angular/core';
import {StatType} from '../types/stat.type';

@Component({
  selector: 'app-rct-ridestats',
  templateUrl: './rct-ridestats.component.html',
  styleUrls: ['./rct-ridestats.component.scss']
})
export class RctRidestatsComponent implements OnInit {
  private excitement = 0;
  private intensity = 0;
  private nausea = 0;
  private simular = false;

  @Output() stats = new EventEmitter<StatType>();

  constructor() {
  }

  ngOnInit(): void {
  }


  get _excitement(): number {
    return this.excitement;
  }

  set _excitement(value: number) {
    this.excitement = value;
  }

  get _intensity(): number {
    return this.intensity;
  }

  set _intensity(value: number) {
    this.intensity = value;
  }

  get _nausea(): number {
    return this.nausea;
  }

  set _nausea(value: number) {
    this.nausea = value;
  }

  get _simular(): boolean {
    return this.simular;
  }

  set _simular(value: boolean) {
    this.simular = value;
  }

  setExcitement(value: string) {
    this._excitement = this.checkIfNumber(parseFloat(value));
    this.emitEvent();
  }

  setNausea(value: string) {
    this._nausea = this.checkIfNumber(parseFloat(value));
    this.emitEvent();
  }

  setIntensity(value: string) {
    this._intensity = this.checkIfNumber(parseFloat(value));
    this.emitEvent();
  }

  setSimular(){
    this._simular = !this._simular;
    this.emitEvent();
  }

  private emitEvent() {
    this.stats.emit({
      excitement: this._excitement,
      intensity: this._intensity,
      nausea: this._nausea,
      simular: this._simular,
    });
  }


  private checkIfNumber(value: any): number {
    if (!isNaN(value)) {
      return value;
    }
    return 0;

  }
}
