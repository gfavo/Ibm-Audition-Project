import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { url } from '../settings';
import { payload } from '../payload/payload';
import { error } from '../erro/erro';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private httpClient: HttpClient){}

  @Output() newItemEvent = new EventEmitter<payload>();
  @Output() switchCadastroEvent = new EventEmitter();



  loginForm = new FormGroup({
    documentoTitular: new FormControl(''),
    senhaTitular: new FormControl(''),
  });


     submit() {

    let params = new HttpParams();

    let connection = url + "/bank/login?cpf=" + this.loginForm.value.documentoTitular +
      "&senha=" + this.loginForm.value.senhaTitular;

      let resposta: any;

 this.httpClient.post(connection, {}, {responseType: "json"}).subscribe((res) => {
      resposta = res as payload;
      alert(res);
      this.newItemEvent.emit(resposta)
      }
, err => {
      console.log((err as error).error.message);
      alert((err as error).error.message);
    },() => {
      console.log(resposta);
    });
  }

  switchCadastro(){
    this.switchCadastroEvent.emit();
  }

}
