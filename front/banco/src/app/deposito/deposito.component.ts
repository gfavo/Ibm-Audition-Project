import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { url } from '../settings';
import { payload } from '../payload/payload';
import { error } from '../erro/erro';

@Component({
  selector: 'app-deposito',
  templateUrl: './deposito.component.html',
  styleUrls: ['./deposito.component.css']
})
export class DepositoComponent {
 depositoForm = new FormGroup({
    valor: new FormControl(''),
  });

  constructor (private httpClient: HttpClient) {}

  private activatedRoute = inject(ActivatedRoute);

  

  submit(){
let cpf = this.activatedRoute.snapshot.params['cpf'];

alert(cpf);

   let connection = url + "/bank/deposito?cpfOriginario=" + cpf+
      "&valor=" + this.depositoForm.value.valor;

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
