import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { url } from '../settings';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { payload } from '../payload/payload';
import { error } from '../erro/erro';

@Component({
  selector: 'app-transferencia',
  templateUrl: './transferencia.component.html',
  styleUrls: ['./transferencia.component.css']
})
export class TransferenciaComponent {
     transferenciaForm = new FormGroup({
    documentoDestinatario: new FormControl(''),
    valor: new FormControl(''),
  });

  constructor (private httpClient: HttpClient) {}

  private activatedRoute = inject(ActivatedRoute);

  

  submit(){
let cpf = this.activatedRoute.snapshot.params['cpf'];

alert(cpf);

   let connection = url + "/bank/transferencia?cpfOriginario=" + cpf+
      "&cpfDestinatario=" + this.transferenciaForm.value.documentoDestinatario + 
      "&valor=" + this.transferenciaForm.value.valor;

      let resposta: any;

 this.httpClient.put(connection, {}, {responseType: "text"}).subscribe((res) => {
      resposta = res;
      alert(res);
      }
, err => {
      console.log((err as error).error.message);
      alert((err as error).error.message);
    },() => {
      console.log(resposta);
    });
  }

}
