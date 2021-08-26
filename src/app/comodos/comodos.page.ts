import { Component, OnInit } from '@angular/core';

import { ComodosService } from './../_services/comodos.service';

@Component({
  selector: 'app-comodos',
  templateUrl: './comodos.page.html',
  styleUrls: ['./comodos.page.scss'],
})
export class ComodosPage implements OnInit {

  comodos: any = [];

  constructor(private comodosService: ComodosService) { }

  ngOnInit() {
    this.getComodos();
  }

  getComodos() {
    this.comodosService.getAll().subscribe(response => {
      const comodos = response;
      this.comodos = [];
      for (const [key, value] of Object.entries(comodos)) {

        let comodo = {
          name: key,
          ir: [],
          relays: [],
          yeeligths: []
        };

        if (value.hasOwnProperty('infrared')) {
          for (let dispositivo of value['infrared']) {
            let dispositivos = [];

            for (let dispo of dispositivo.alias) {
              dispositivos.push(dispo);
            }

            let protocolos = [];
            for (let protocolo of dispositivo.protocol) {
              protocolos.push(protocolo);
            }

            for (let i = 0; i < dispositivos.length; ++i) {
              comodo.ir.push(
                {
                  id: dispositivo.id,
                  name: dispositivos[i],
                  protocolo: protocolos[i],
                  type: "infrared",
                  temperature: dispositivo.temperature
                }
              );
            }
          }
        }

        // if (value.hasOwnProperty('yeelight')) {
        //   for (let dispositivo of value['yeelight']) {
        //     comodo.yeeligths.push(
        //       {
        //         id: dispositivo.id,
        //         name: dispositivo.alias,
        //         protocolo: dispositivo.protocol,
        //         type: "rgb",
        //         switch: dispositivo.switch,
        //         color: dispositivo.color
        //       }
        //     );
        //   }
        // }

        if (value.hasOwnProperty('relays')) {
          for (let dispositivo of value['relays']) {
            comodo.relays.push(
              {
                id: dispositivo.id,
                name: dispositivo.alias,
                protocolo: null,
                type: "relay",
                switch: dispositivo.switch
              }
            );
          }
        }


        this.comodos.push(comodo);
      }

      console.log("Comodos", this.comodos);
    });



  }

}
