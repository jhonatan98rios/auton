import { Component, OnInit, AfterContentInit } from '@angular/core';

import { Router } from '@angular/router';

import { InfraredService } from './../../_services/infrared.service';

import { first } from 'rxjs/operators';

@Component({
  selector: 'app-ar-condicionado',
  templateUrl: './ar-condicionado.page.html',
  styleUrls: ['./ar-condicionado.page.scss'],
})
export class ArCondicionadoPage implements AfterContentInit {

  isCold: Boolean = true;
  changeObjectSliderTemp: any;
  powerObjectCallback: any;
  temperatura: Number = 17;
  device: any;
  sliderTimeout: any;
  modoObjectCallBack: any;
  abaObjectCallBack: any;
  vetObjectCallBack: any;

  modo: String = 'AUTO';

  display: String = '';
  vent: String = '';
  palheta: String = '';

  constructor(private router: Router, public infraredService: InfraredService) {
    this.changeObjectSliderTemp = {
      self: this,
      callback: (temp, self) => {
        self.temperatura = temp;
        if (temp > 24) self.isCold = false;
        else self.isCold = true;

        clearTimeout(this.sliderTimeout);
        this.sliderTimeout = setTimeout(() => {
          self.changeTemperature(temp);
        }, 300);
      }
    };

    this.powerObjectCallback = {
      self: this,
      callback: (self) => {
        self.power(self);
      }
    }

    this.modoObjectCallBack = {
      self: this,
      callback: (self) => {
        switch (self.modo) {
          case 'AUTO':
            self.modo = 'COOL';
            break;
          case 'COOL':
            self.modo = 'DRY';
            break;
          case 'DRY':
            self.modo = 'AUTO';
            break;
          default:
            self.modo = 'AUTO';
            break;
        }
        self.changeTemperature();
      }
    }

    this.abaObjectCallBack = {
      self: this,
      callback: (self) => {
        if (self.palheta) {
          self.palheta = '';
        } else {
          self.palheta = 'S';
        }
        self.changeTemperature();
      }
    }

    this.vetObjectCallBack = {
      self: this,
      callback: (self) => {
        switch (self.vent) {
          case '':
            self.vent = '1';
            break;
          case '1':
            self.vent = '2';
            break;
          case '2':
            self.vent = '3';
            break;
          case '3':
            self.vent = '';
            break;
          default:
            self.vent = '';
            break;
        }
        self.changeTemperature();
      }

    }

  }

  ngAfterContentInit() {
    const { dispositivo } = window.history.state;
    this.device = dispositivo;
    console.log("Dispostiivo", this.device);
  }

  voltarParaComodos() {
    this.router.navigateByUrl('/tabs/comodos');
  }

  power(self) {
    self.infraredService.runCommand(self.device, 'PWR_OFF')
      .pipe(first())
      .subscribe(
        data => {
          console.log("Data", data);
        },
        error => {
          console.log("Error", error);
        });
  }

  changeTemperature() {
    const modo_vent = this.modo == 'COOL' ? `${this.modo}${this.vent}` : this.modo;
    let extras = '';
    if (this.palheta || this.display) {
      extras = `|${this.palheta}${this.display}`;
    }
    this.infraredService.runCommand(this.device, `${modo_vent}|${this.temperatura}${extras}`)
      .pipe(first())
      .subscribe(
        data => {
          console.log("Data", data);
        },
        error => {
          console.log("Error", error);
        });
  }


}
