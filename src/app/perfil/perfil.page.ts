import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { first } from 'rxjs/operators';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  mostrarSenha: Boolean = false;
  ddns: string;

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
  }

  toggleInputSenha() {
    this.mostrarSenha = !this.mostrarSenha;
  }

  alterarSenha() {
    this.router.navigateByUrl(`/tabs/perfil/alterar-senha`);
  }

  salvarDDNS() {
    this.http.post<any>(`${this.ddns}/config`, {ddns: this.ddns})
    .pipe(first())
    .subscribe(data => {
      console.log("Data", data);
      localStorage.setItem('ddns', this.ddns);
    });
  }


}
