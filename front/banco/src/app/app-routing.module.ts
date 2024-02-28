import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { DepositoComponent } from './deposito/deposito.component';
import { TransferenciaComponent } from './transferencia/transferencia.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'deposito/:cpf', component: DepositoComponent },
  { path: 'transferencia/:cpf', component: TransferenciaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
