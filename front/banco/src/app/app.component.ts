import { Component } from '@angular/core';
import { payload } from './payload/payload';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor (private router: Router) {
  }

  usuario: any;
  cpf: any;
  title = 'banco';
  autenticado: boolean = false;
  login: boolean = false;
  


  setUsuario(payload: payload) {
   console.log(payload.nome);
   this.usuario = payload.nome;
   this.cpf = payload.cpf;
   this.autenticado = true;
   this.router.navigate([""]);
  }

  switchLoginCadastro(){
    console.log("making switch...");
    this.login = !this.login;
  }

  fireLogOff() {
   this.autenticado = false;
   this.cpf = undefined;
   this.usuario = undefined;
  }

}
