package com.Datwyler.CreditFacility.assignment.repositories;

import com.Datwyler.CreditFacility.assignment.models.Loan;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LoanRepository extends JpaRepository<Loan,Long> {
	
}