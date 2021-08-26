import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-controle-direcional',
  templateUrl: './controle-direcional.component.html',
  styleUrls: ['./controle-direcional.component.scss'],
})
export class ControleDirecionalComponent implements OnInit {

  @Input() callbackOkClickObject: any;
  @Input() callbackUpClickObject: any;
  @Input() callbackDownClickObject: any;
  @Input() callbackLeftClickObject: any;
  @Input() callbackRightClickObject: any;

  constructor() { }

  ngOnInit() {}

}
