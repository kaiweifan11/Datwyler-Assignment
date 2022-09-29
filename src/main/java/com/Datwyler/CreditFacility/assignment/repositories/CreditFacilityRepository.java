package com.Datwyler.CreditFacility.assignment.repositories;

import com.Datwyler.CreditFacility.assignment.models.CreditFacility;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CreditFacilityRepository extends JpaRepository<CreditFacility,Long> {
	
}