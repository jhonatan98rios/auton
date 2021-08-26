import { Component, OnInit, AfterContentInit, EventEmitter, Output } from '@angular/core';

import { Router } from '@angular/router';

import { InfraredService } from './../../_services/infrared.service';

import { first } from 'rxjs/operators';

import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.page.html',
  styleUrls: ['./tv.page.scss'],
})
export class TvPage implements AfterContentInit {

  pwrOnObjectCallBack: any;
  pwrOffObjectCallBack: any;

  addVolumeObjectCallBack: any;
  removeVolumeObjectCallBack: any;
  addChObjectCallBack: any;
  removeChObjectCallBack: any;
  menuObjectCallBack: any;
  returnObjectCallBack: any;
  muteObjectCallBack: any;
  homeObjectCallBack: any;

  okObjectCallback: any;
  upObjectCallback: any;
  downObjectCallback: any;
  leftObjectCallback: any;
  rightObjectCallback: any;
  openNumericKeyboardObjectCallback: any;
  openMoreKeyboardObjectCallback: any;
  openAvKeyboardObjectCallback: any;

  device: any;



  constructor(private router: Router, public infraredService: InfraredService, public modalController: ModalController) {

    this.openNumericKeyboardObjectCallback = {
      self: this,
      callback: (self) => {
        self.openNumericKeyboard(self);
      }
    }

    this.openMoreKeyboardObjectCallback = {
      self: this,
      callback: (self) => {
        self.openMoreKeyboard(self);
      }
    }

    this.openAvKeyboardObjectCallback = {
      self: this,
      callback: (self) => {
        self.openAvKeyboard(self);
      }
    }

    this.pwrOnObjectCallBack = {
      self: this,
      callback: (self) => {
        self.sendCommand('PWR_ON');
      }
    }


    this.pwrOffObjectCallBack = {
      self: this,
      callback: (self) => {
        self.sendCommand('PWR_OFF');
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

    this.addChObjectCallBack = {
      self: this,
      callback: (self) => {
        self.sendCommand('CH_ADD');
      }
    }

    this.removeChObjectCallBack = {
      self: this,
      callback: (self) => {
        self.sendCommand('CH_SUB');
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

    this.muteObjectCallBack = {
      self: this,
      callback: (self) => {
        self.sendCommand('MUTE');
      }
    }

    this.homeObjectCallBack = {
      self: this,
      callback: (self) => {
        self.sendCommand('HOME');
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


  }

  async openNumericKeyboard(self) {
    const modal = await self.modalController.create({
      component: TecladoNumericoModal,
      cssClass: 'teclado-numerico',
      componentProps: {
      }
    });

    await modal.present();

    const { data } = await modal.onWillDismiss();

    self.sendCommand(data.number);
  }

  async openMoreKeyboard(self) {
    const modal = await self.modalController.create({
      component: TecladoMaisModal,
      cssClass: 'teclado-mais',
      componentProps: {
      }
    });

    await modal.present();

    const { data } = await modal.onWillDismiss();

    self.sendCommand(data.command);
  }

  async openAvKeyboard(self) {
    const modal = await self.modalController.create({
      component: TecladoAvModal,
      cssClass: 'teclado-av',
      componentProps: {
      }
    });
    return await modal.present();
  }

  closeNumericKeyboard() {
    this.modalController.dismiss({
      'dismissed': true
    });
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


@Component({
  selector: 'teclado-numero-modal',
  templateUrl: './teclado-numerico/teclado-numerico.page.html',
  styleUrls: ['./teclado-numerico/teclado-numerico.scss'],
})
export class TecladoNumericoModal {

  clickNumberObjectCallback: any;
  number: string = '';

  constructor(public modalController: ModalController) {
  }

  dismiss(number) {
    this.modalController.dismiss({
      number: number
    });
  }

  onNumberClick(self, number) {
    self.dismiss(number);
  }

  getOnClickObject(number) {
    return {
      self: this,
      number: number,
      callback: (self, number) => {
        clearTimeout(self.number_timeout);
        self.number += number;
        self.number_timeout = setTimeout(() => {
          self.onNumberClick(self, self.number);
          self.number = "";
        }, 1000);
      }
    }
  }

}

@Component({
  selector: 'teclado-mais-modal',
  templateUrl: './teclado-mais/teclado-mais.page.html',
  styleUrls: ['./teclado-mais/teclado-mais.scss'],
})
export class TecladoMaisModal {

  clickButtonObjectCallback: any;

  constructor(public modalController: ModalController) {
    console.log("KAJWFHBJNAFM K");
  }

  getOnClickObject(command) {
    return {
      self: this,
      command: command,
      callback: (self, command) => {
        self.onButtonClick(self, self.command);
      }
    }
  }

  onButtonClick(command) {
    this.dismiss(command);
  }

  dismiss(command) {
    this.modalController.dismiss({
      command: command
    });
  }
}

@Component({
  selector: 'teclado-av-modal',
  templateUrl: './teclado-av/teclado-av.page.html',
  styleUrls: ['./teclado-av/teclado-av.scss'],
})
export class TecladoAvModal {

  constructor(public modalController: ModalController) { }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }
}