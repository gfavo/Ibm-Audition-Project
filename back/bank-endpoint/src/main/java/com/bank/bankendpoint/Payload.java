package com.bank.bankendpoint;

public class Payload {
   public Integer cpf;
   public String nome;
   
   Payload(Integer cpf,String nome){
	   super();
	   this.cpf = cpf;
	   this.nome = nome;
   }
}
