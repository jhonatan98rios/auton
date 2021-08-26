import { Component, OnInit, Input } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-card-comodo',
  templateUrl: './card-comodo.component.html',
  styleUrls: ['./card-comodo.component.scss'],
})
export class CardComodoComponent implements OnInit {
  @Input() comodo: any;
  @Input() icon: string;

  constructor(private router: Router) { }

  ngOnInit() { }

  irParaDispositivos() {
    this.router.navigateByUrl('/tabs/comodos/dispositivos', { state: { comodo: this.comodo } });
  }

}
