package com.Datwyler.CreditFacility.assignment;

import com.Datwyler.CreditFacility.assignment.models.CreditFacility;
import com.Datwyler.CreditFacility.assignment.repositories.CreditFacilityRepository;
import org.junit.Assert;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;


@DataJpaTest
public class CreditFacilityTests {

    @Autowired
    private CreditFacilityRepository creditFacilityRepository;

    @Test
    public void testSaveUser(){
    	CreditFacility creditFacility = new CreditFacility("John");
        creditFacilityRepository.save(creditFacility);
        creditFacilityRepository.findById(new Long(1))
                .map(newCreditFacility ->{
                    Assert.assertEquals("John",newCreditFacility.getApplicantName());
                    return true;
                });
    }

    @Test
    public void getUser(){
    	CreditFacility creditFacility = new CreditFacility("John");
    	CreditFacility creditFacility2 = new CreditFacility("Daniel");
        creditFacilityRepository.save(creditFacility);

        creditFacilityRepository.save(creditFacility2);

        creditFacilityRepository.findById(new Long(1))
                .map(newCreditFacility ->{
                   Assert.assertEquals("danie",newCreditFacility.getApplicantName());
                   return true;
                });

    }

    @Test
    public void getUsers(){
    	CreditFacility creditFacility = new CreditFacility("John");
    	CreditFacility creditFacility2 = new CreditFacility("Daniel");
        creditFacilityRepository.save(creditFacility);
        creditFacilityRepository.save(creditFacility2);

        Assert.assertNotNull(creditFacilityRepository.findAll());
    }

    @Test
    public void deleteUser(){
    	CreditFacility creditFacility = new CreditFacility("John");
        creditFacilityRepository.save(creditFacility);
        creditFacilityRepository.delete(creditFacility);
        Assert.assertTrue(creditFacilityRepository.findAll().isEmpty());
    }


}
