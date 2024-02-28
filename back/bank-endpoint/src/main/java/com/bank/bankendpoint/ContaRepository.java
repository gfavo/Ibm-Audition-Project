package com.bank.bankendpoint;

import org.springframework.data.repository.CrudRepository;

import com.bank.bankendpoint.Conta;

// This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository
// CRUD refers Create, Read, Update, Delete

public interface ContaRepository extends CrudRepository<Conta, Integer> {

}