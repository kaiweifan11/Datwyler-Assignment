package com.Datwyler.CreditFacility.assignment.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Loan {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String type;
    private float amount;
    private Long creditFacilityId;

    public Loan(){}

    public Loan(String type, float amount, Long creditFacilityId){
        this.type = type;
        this.amount = amount;
        this.creditFacilityId = creditFacilityId;
    }

    public Long getId(){
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public float getAmount() {
		return amount;
	}

	public void setAmount(float amount) {
		this.amount = amount;
	}

	public Long getCreditFacilityId() {
		return creditFacilityId;
	}

	public void setCreditFacilityId(Long creditFacilityId) {
		this.creditFacilityId = creditFacilityId;
	}
	
}