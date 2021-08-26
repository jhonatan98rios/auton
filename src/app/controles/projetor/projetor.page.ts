import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InfraredService } from './../../_services/infrared.service';

import { first } from 'rxjs/operators';

@Component({
  selector: 'app-projetor',
  templateUrl: './projetor.page.html',
  styleUrls: ['./projetor.page.scss'],
})
export class ProjetorPage implements OnInit {

  pwrOnObjectCallBack: any;

  okObjectCallback: any;
  upObjectCallback: any;
  downObjectCallback: any;
  leftObjectCallback: any;
  rightObjectCallback: any;


  addVolumeObjectCallBack: any;
  removeVolumeObjectCallBack: any;

  menuObjectCallBack: any;
  returnObjectCallBack: any;
  homeObjectCallBack: any;

  device: any;

  constructor(private router: Router, public infraredService: InfraredService) {

    this.pwrOnObjectCallBack = {
      self: this,
      callback: (self) => {
        self.sendCommand('PWR_ON');
      }
    }

    this.okObjectCallback = {
      self: this,
      callback: (self) => {
        self.sendCommand('ENTER');
      }
    }

    this.upObjectCallback = {
      self: this,
      callback: (self) => {
        self.sendCommand('UP');
      }
    }

    this.downObjectCallback = {
      self: this,
      callback: (self) => {
        self.sendCommand('DOWN');
      }
    }

    this.leftObjectCallback = {
      self: this,
      callback: (self) => {
        self.sendCommand('LEFT');
      }
    }

    this.rightObjectCallback = {
      self: this,
      callback: (self) => {
        self.sendCommand('RIGHT');
      }
    }

    this.addVolumeObjectCallBack = {
      self: this,
      callback: (self) => {
        self.sendCommand('VOL_ADD');
      }
    }

    this.removeVolumeObjectCallBack = {
      self: this,
      callback: (self) => {
        self.sendCommand('VOL_SUB');
      }
    }

    this.menuObjectCallBack = {
      self: this,
      callback: (self) => {
        self.sendCommand('MENU');
      }
    }

    this.returnObjectCallBack = {
      self: this,
      callback: (self) => {
        self.sendCommand('RETURN');
      }
    }

    this.homeObjectCallBack = {
      self: this,
      callback: (self) => {
        self.sendCommand('AUTO');
      }
    }
  }

  ngOnInit() {
  }

  ngAfterContentInit() {
    const { dispositivo } = window.history.state;
    this.device = dispositivo;
    console.log("Dispostiivo", this.device);
  }

  voltarParaComodos() {
    this.router.navigateByUrl('/tabs/comodos');
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



}
