import { Component, OnInit } from '@angular/core';

import { InfraredService } from './../../_services/infrared.service';

import { first } from 'rxjs/operators';

@Component({
  selector: 'app-rgb',
  templateUrl: './rgb.page.html',
  styleUrls: ['./rgb.page.scss'],
})
export class RgbPage implements OnInit {

  device: any;
  dimmerTimeout: any;

  constructor(public infraredService: InfraredService) { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    const { dispositivo } = window.history.state;
    this.device = dispositivo;
    console.log("Dispostiivo", this.device);
  }

  changeColor(command) {
    this.sendCommand(command);
  }

  sendCommand(command) {
    this.infraredService.runCommand(this.device, command)
      .pipe(first())
      .subscribe(
        data => {
          console.log("Data", data);
        },
        error => {
          console.log("Error", error);
        });
  }

  changeDimmer(event) {
    clearTimeout(this.dimmerTimeout);
    this.dimmerTimeout = setTimeout(() => {
      this.infraredService.changeBright(this.device, 'BRIGHT', event.target.value)
        .pipe(first())
        .subscribe(
          data => {
            console.log("Data", data);
          },
          error => {
            console.log("Error", error);
          });
    }, 300);
  }
}
