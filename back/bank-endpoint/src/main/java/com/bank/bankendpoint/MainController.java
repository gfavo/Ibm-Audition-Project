package com.bank.bankendpoint;

import java.sql.DatabaseMetaData;
import java.util.Optional;
import java.util.logging.Logger;

import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

@Controller 
@RequestMapping(path="/bank")
public class MainController {
  @Autowired 
  private ContaRepository contaRepository;

  @ResponseStatus(value=HttpStatus.CONFLICT, reason="Usuário com cpf especificado já existe!") 
  public class DuplicateUserException extends RuntimeException {

  }
  
  @ResponseStatus(value=HttpStatus.BAD_REQUEST, reason="Senha incorreta!") 
  public class WrongPasswordException extends RuntimeException {

  }
  
  @ResponseStatus(value=HttpStatus.CONFLICT, reason="Usuário nao existe!") 
  public class NullUserException extends RuntimeException {

  }
  
  @ResponseStatus(value=HttpStatus.BAD_REQUEST, reason="Saldo insuficiente!") 
  public class SaldoInsuficienteException extends RuntimeException {

  }
  
  @CrossOrigin(origins = "http://localhost:4200")
  @PostMapping(path="/add")
  public @ResponseBody Payload addNewConta(@RequestParam Integer cpf, @RequestParam String senha
      , @RequestParam String nome, @RequestParam Integer numeroConta, @RequestParam String endereco) {
 
	  
    Conta n = new Conta();
	
    if(contaRepository.existsById(cpf)) { 
      	System.out.print(cpf);
      	System.out.print(contaRepository.findById(cpf));
    	throw new DuplicateUserException();
  
    }
	
    n.setCpf(cpf);
    n.setSenha(senha);
    n.setNome(nome);
    n.setNumeroConta(numeroConta);
    n.setEndereco(endereco);
    contaRepository.save(n);
    return new Payload(cpf, nome);
  }
  
  @CrossOrigin(origins = "http://localhost:4200")
  @PostMapping(path="login")
  public @ResponseBody Payload login(@RequestParam Integer cpf, @RequestParam String senha) {

	    if(!contaRepository.existsById(cpf)) { 
	      	System.out.print(cpf);
	      	System.out.print(contaRepository.findById(cpf));
	    	throw new NullUserException();
	    } else if(!contaRepository.findById(cpf).get().getSenha().equals(senha)){
	      	System.out.print(cpf);
	      	System.out.print(contaRepository.findById(cpf));
	    	throw new WrongPasswordException();
	    }

	    
  return new Payload(cpf, contaRepository.findById(cpf).get().getNome());
  }
  
  @CrossOrigin(origins = "http://localhost:4200")
  @PutMapping(path="transferencia")
  public @ResponseBody String transferencia(@RequestParam Integer cpfOriginario, @RequestParam Integer cpfDestinatario, @RequestParam Double valor) {

	    if(!contaRepository.existsById(cpfDestinatario)) { 
	    	throw new NullUserException();
	    } else if(contaRepository.findById(cpfOriginario).get().getSaldo() < valor){
	      	System.out.print(cpfOriginario);
	      	System.out.print(contaRepository.findById(cpfOriginario));
	    	throw new SaldoInsuficienteException();
	    }
	    
	    
	    contaRepository.findById(cpfDestinatario).map(usuario -> {
	usuario.setSaldo(usuario.getSaldo() + valor);
	return contaRepository.save(usuario);
	    });
	   
	    contaRepository.findById(cpfOriginario).map(usuario -> {
	    	usuario.setSaldo(usuario.getSaldo() - valor);
	    	return contaRepository.save(usuario);
	    	    });
	    	   
	    
  return "Valor de " + valor + " transferido com sucesso para " + contaRepository.findById(cpfDestinatario).get().getNome() ;
  }

  @CrossOrigin(origins = "http://localhost:4200")
  @PutMapping(path="deposito")
  public @ResponseBody String deposito(@RequestParam Integer cpfOriginario , @RequestParam Double valor) {

	  contaRepository.findById(cpfOriginario).map(usuario -> {
	    	usuario.setSaldo(usuario.getSaldo() + valor);
	    	return contaRepository.save(usuario);
	    	    });
	    
  return "Valor de " + valor + " transferido com sucesso para " + contaRepository.findById(cpfOriginario).get().getNome() ;
  }
  
  @CrossOrigin(origins = "http://localhost:4200")
  @GetMapping(path="/all")
  public @ResponseBody Iterable<Conta> getAllUsers() {
    // This returns a JSON or XML with the users
    return contaRepository.findAll();
  }
}
