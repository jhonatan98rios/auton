import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-alterar-senha',
  templateUrl: './alterar-senha.component.html',
  styleUrls: ['./alterar-senha.component.scss'],
})
export class AlterarSenhaComponent implements OnInit {

  mostrarSenha: Boolean = false;
  mostrarSenhaConfirmarSenha: Boolean = false;

  constructor(private router: Router) { }

  ngOnInit() { }

  toggleInputSenha() {
    this.mostrarSenha = !this.mostrarSenha;
  }

  toggleInputConfirmarSenha() {
    this.mostrarSenhaConfirmarSenha = !this.mostrarSenhaConfirmarSenha;
  }

  voltarParaPerfil(){
    this.router.navigateByUrl('/tabs/perfil');
  }

}
