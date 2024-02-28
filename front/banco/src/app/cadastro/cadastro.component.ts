import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { url } from '../settings';
import { catchError } from 'rxjs';
import { payload } from '../payload/payload';
import { error } from '../erro/erro';



@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  
  constructor(private httpClient: HttpClient) { }

@Output() newItemEvent = new EventEmitter<payload>();
@Output() switchLoginEvent = new EventEmitter();


  cadastroForm = new FormGroup({
    nomeTitular: new FormControl(''),
    documentoTitular: new FormControl(''),
    senhaTitular: new FormControl(''),
    numeroConta: new FormControl(''),
    enderecoTitular: new FormControl('')
  });

   submit() {

    let params = new HttpParams();

    let connection = url + "/bank/add?cpf=" + this.cadastroForm.value.documentoTitular +
      "&senha=" + this.cadastroForm.value.senhaTitular + 
      "&nome=" + this.cadastroForm.value.nomeTitular +
      "&numeroConta=" + this.cadastroForm.value.numeroConta +
      "&endereco=" + this.cadastroForm.value.enderecoTitular;

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

  switchLogin(){
    console.log("button clicked");
    this.switchLoginEvent.emit();
  }
}




