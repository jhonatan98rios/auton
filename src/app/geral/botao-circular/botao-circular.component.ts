import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-botao-circular',
  templateUrl: './botao-circular.component.html',
  styleUrls: ['./botao-circular.component.scss'],
})
export class BotaoCircularComponent implements OnInit {

  @Input() icon: string;
  @Input() iconName: string;
  @Input() label: string;
  @Input() callbackClickObject: any;
  @Input() circular: Boolean;
  @Input() isNumeric: Boolean;
  @Input() cor: String;

  constructor() {
  }

  ngOnInit() {
    if (typeof (this.circular) != 'undefined') {
      this.circular = true;
    } else {
      this.circular = false;
    }

    if (typeof (this.isNumeric) != 'undefined') {
      this.isNumeric = true;
    } else {
      this.isNumeric = false;
    }
  }

  onClick() {
    if (this.isNumeric) {
      this.callbackClickObject.callback(this.callbackClickObject.self, this.callbackClickObject.number)
    } else {
      this.callbackClickObject.callback(this.callbackClickObject.self)
    }

  }

}
