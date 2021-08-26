import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../_services/authentication.service';

import { first } from 'rxjs/operators';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  mostrarSenha: Boolean = false;
  ddns: string;

  user: string;
  passwd: string;

  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }


  toggleInputSenha() {
    this.mostrarSenha = !this.mostrarSenha;
  }

  login() {
    this.authenticationService.login(this.user, this.passwd, this.ddns)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigateByUrl(`/tabs`);
          console.log("DDNS", this.ddns);
        },
        error => {
        });
  }

}
