import { Component, OnInit, Input } from '@angular/core';

import { Router } from '@angular/router';

import { RelaysService } from './../../_services/relays.service';


import { first } from 'rxjs/operators';

@Component({
  selector: 'app-dispositivos',
  templateUrl: './dispositivos.page.html',
  styleUrls: ['./dispositivos.page.scss'],
})
export class DispositivosPage implements OnInit {

  @Input() comodo: any;
  dispositivos: any;

  constructor(private router: Router, public relaysService: RelaysService) {
    this.dispositivos = [];
  }

  ngOnInit() {
    const { comodo } = window.history.state;
    console.log("Comodo", comodo);
    this.comodo = comodo;
    if (this.comodo.hasOwnProperty('ir')) {
      for (let device of this.comodo.ir) {
        const device_name = device.name.toLowerCase();
        let dispositivo = {
          id: device.id,
          nome: device.name,
          comodo: this.comodo.name,
          temperatura: device.temperature,
          protocol: device.protocolo,
          controlhe: device_name,
          icon: `./assets/icon/equipamentos/icon-${device_name}.svg`,
          type: device.type
        };
        this.dispositivos.push(dispositivo);
      }
    }

    if (this.comodo.hasOwnProperty('relays')) {
      for (let device of this.comodo.relays) {
        const device_name = device.name.toLowerCase();
        let dispositivo = {
          id: device.id,
          nome: device.name,
          comodo: this.comodo.name,
          icon: `./assets/icon/equipamentos/icon-lamp.svg`,
          type: device.type,
          active: device.switch == "on" ? true : false
        };
        this.dispositivos.push(dispositivo);
      }
    }

    if (this.comodo.hasOwnProperty('yeelights')) {
      for (let device of this.comodo.yeelights) {
        const device_name = device.name.toLowerCase();

        let dispositivo = {
          id: device.id,
          nome: device.name,
          comodo: this.comodo.name,
          icon: `./assets/icon/equipamentos/icon-lamp.svg`,
          type: device.type,
          active: device.switch == "on" ? true : false,
          color: device.color
        };

        this.dispositivos.push(dispositivo);
      }
    }
  }

  voltarParaComodos() {
    this.router.navigateByUrl('/tabs/comodos');
  }

  handleChangeToggle(e, dispostivo) {
    e.stopPropagation();
    dispostivo.active = e.detail.checked;
    this.toggleDispositivo(dispostivo);
  }

  abrirPaginaControle(dispositivo) {
    if (dispositivo.type == 'relay') {
      dispositivo.active = !dispositivo.active;
      this.toggleDispositivo(dispositivo);
      return;
    }
    this.router.navigateByUrl(`/controlhes/${dispositivo.controlhe}`, { state: { dispositivo: dispositivo } });
  }

  async toggleDispositivo(dispositivo) {
    let command;
    if (dispositivo.active) command = 'on';
    else command = 'off';

    this.relaysService.toggleDevice(dispositivo, command)
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
