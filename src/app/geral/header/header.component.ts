import { Component, OnInit, Input } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input() titulo: string;
  @Input() callbackBackButton: Function;
  @Input() icon: String;

  constructor(private router: Router) { }

  ngOnInit() {}

  goBack(){
    this.callbackBackButton();
  }

}
