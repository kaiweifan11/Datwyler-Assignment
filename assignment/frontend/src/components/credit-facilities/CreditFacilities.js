import React from 'react';
import CreditFacilityInfo from "./CreditFacilityInfo";

const CreditFacilities = ({creditFacilities, allLoans, removeCreditFacility, addLoan, removeLoan, updateLoan}) =>{
	return creditFacilities.map((creditFacility) =>(
       <CreditFacilityInfo 
       		creditFacility={creditFacility} 
       		allLoans={allLoans}
       		key={creditFacility.id} 
       		removeCreditFacility={removeCreditFacility} 
       		addLoan={addLoan}
       		removeLoan={removeLoan}
       		updateLoan={updateLoan}
   		/>
    ));
}

export default CreditFacilities;