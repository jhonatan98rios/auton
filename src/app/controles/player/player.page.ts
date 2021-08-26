import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-player',
  templateUrl: './player.page.html',
  styleUrls: ['./player.page.scss'],
})
export class PlayerPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  voltarParaComodos(){
    this.router.navigateByUrl('/tabs/comodos');
  }

}
