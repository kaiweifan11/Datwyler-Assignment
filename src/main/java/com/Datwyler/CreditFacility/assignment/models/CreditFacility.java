package com.Datwyler.CreditFacility.assignment.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import com.Datwyler.CreditFacility.assignment.models.Loan;


@Entity
public class CreditFacility {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String applicantName;

    private CreditFacility(){}

    public CreditFacility(String applicantName){
        this.applicantName = applicantName;
    }

    public Long getId() {
		return id;
	}

	public void setId(Long id) {
        this.id = id;
    }

	public String getApplicantName() {
		return applicantName;
	}

	public void setApplicantName(String applicantName) {
		this.applicantName = applicantName;
	}
}