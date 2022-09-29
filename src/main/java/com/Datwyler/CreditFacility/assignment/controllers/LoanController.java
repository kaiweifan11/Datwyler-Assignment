package com.Datwyler.CreditFacility.assignment.controllers;

import com.Datwyler.CreditFacility.assignment.exceptions.ResourceNotFoundException;
import com.Datwyler.CreditFacility.assignment.models.Loan;
import com.Datwyler.CreditFacility.assignment.repositories.LoanRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class LoanController {
    private LoanRepository loanRepository;

    @Autowired
    public LoanController(LoanRepository loanRepository){
        this.loanRepository = loanRepository;
    }

    @PostMapping("/loan/save")
    public Loan saveLoan(@RequestBody Loan loan){
        return this.loanRepository.save(loan);
    }

    @GetMapping("/loan/all")
    public ResponseEntity<List<Loan>> getLoan(){
        return ResponseEntity.ok(
          this.loanRepository.findAll()
        );
    }

    @GetMapping("/loan/{id}")
    public ResponseEntity<Loan> getLoan(@PathVariable(value = "id" ) Long id){
    	Loan loan = this.loanRepository.findById(id).orElseThrow(
                ()-> new ResourceNotFoundException("Loan not found")
        );

        return  ResponseEntity.ok().body(loan);
    }

    @PutMapping("loan/{id}")
    public Loan updateLoan(@RequestBody Loan newLoan, @PathVariable(value = "id") Long id){
        return this.loanRepository.findById(id)
                .map(loan -> {
                    loan.setType(newLoan.getType());
                    loan.setAmount(newLoan.getAmount());
                    loan.setCreditFacilityId(newLoan.getCreditFacilityId());
                    return this.loanRepository.save(loan);
                })
                .orElseGet(()->{
                	newLoan.setId(id);
                    return this.loanRepository.save(newLoan);
                });
    }

    @DeleteMapping("loan/{id}")
    public ResponseEntity<Void> removeLoan(@PathVariable(value = "id") Long id){
    	Loan loan =this.loanRepository.findById(id).orElseThrow(
                ()-> new ResourceNotFoundException("Loan not found"+id)
        );

        this.loanRepository.delete(loan);
        return ResponseEntity.ok().build();
    }
}