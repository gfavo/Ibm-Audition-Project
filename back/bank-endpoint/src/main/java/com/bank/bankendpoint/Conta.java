package com.bank.bankendpoint;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity 
public class Conta {
  @Id
  private Integer cpf;
  
  private String senha;

  private String nome;

  private Integer numeroConta;
  
  private String endereco;
  
  private Double saldo = 0.0;

public Double getSaldo() {
	return saldo;
}

public void setSaldo(Double saldo) {
	this.saldo = saldo;
}

public Integer getCpf() {
	return cpf;
}

public void setCpf(Integer cpf) {
	this.cpf = cpf;
}

public String getSenha() {
	return senha;
}

public void setSenha(String senha) {
	this.senha = senha;
}

public String getNome() {
	return nome;
}

public void setNome(String nome) {
	this.nome = nome;
}

public Integer getNumeroConta() {
	return numeroConta;
}

public void setNumeroConta(Integer numeroConta) {
	this.numeroConta = numeroConta;
}

public String getEndereco() {
	return endereco;
}

public void setEndereco(String endereco) {
	this.endereco = endereco;
}



}
