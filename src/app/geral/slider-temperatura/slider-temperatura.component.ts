import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-slider-temperatura',
  templateUrl: './slider-temperatura.component.html',
  styleUrls: ['./slider-temperatura.component.scss'],
})
export class SliderTemperaturaComponent implements OnInit {

  @Input() callbackObjectChangeSlider: any;

  constructor() { }

  ngOnInit() { }

  changeSlider(e) {
    this.callbackObjectChangeSlider.callback(e.target.value, this.callbackObjectChangeSlider.self);
  }

}
