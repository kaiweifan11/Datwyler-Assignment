package com.Datwyler.CreditFacility.assignment.controllers;

import com.Datwyler.CreditFacility.assignment.exceptions.ResourceNotFoundException;
import com.Datwyler.CreditFacility.assignment.models.CreditFacility;
import com.Datwyler.CreditFacility.assignment.repositories.CreditFacilityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class CreditFacilityController {
    private CreditFacilityRepository creditFacilityRepository;

    @Autowired
    public CreditFacilityController(CreditFacilityRepository creditFacilityRepository){
        this.creditFacilityRepository = creditFacilityRepository;
    }

    @PostMapping("/creditFacility/save")
    public CreditFacility saveCreditFacility(@RequestBody CreditFacility creditFacility){
        return this.creditFacilityRepository.save(creditFacility);
    }

    @GetMapping("/creditFacility/all")
    public ResponseEntity<List<CreditFacility>> getCreditFacility(){
        return ResponseEntity.ok(
          this.creditFacilityRepository.findAll()
        );
    }

    @GetMapping("/creditFacility/{id}")
    public ResponseEntity<CreditFacility> getCreditFacility(@PathVariable(value = "id" ) Long id){
    	CreditFacility creditFacility = this.creditFacilityRepository.findById(id).orElseThrow(
                ()-> new ResourceNotFoundException("Credit Facility not found")
        );

        return  ResponseEntity.ok().body(creditFacility);
    }

    @PutMapping("creditFacility/{id}")
    public CreditFacility updateCreditFacility(@RequestBody CreditFacility newCreditFacility, @PathVariable(value = "id") Long id){
        return this.creditFacilityRepository.findById(id)
                .map(creditFacility -> {
                    creditFacility.setApplicantName(newCreditFacility.getApplicantName());
                    return this.creditFacilityRepository.save(creditFacility);
                })
                .orElseGet(()->{
                	newCreditFacility.setId(id);
                   return this.creditFacilityRepository.save(newCreditFacility);
                });
    }

    @DeleteMapping("creditFacility/{id}")
    public ResponseEntity<Void> removeCreditFacility(@PathVariable(value = "id") Long id){
    	CreditFacility creditFacility =this.creditFacilityRepository.findById(id).orElseThrow(
                ()-> new ResourceNotFoundException("User not found"+id)
        );

        this.creditFacilityRepository.delete(creditFacility);
        return ResponseEntity.ok().build();
    }
}