import React from 'react';
import LoanInfo from "./LoanInfo";

const Loans = ({loans, checkAndRemove, addLoan, creditFacilityId, updateLoan}) =>{
	return loans.map((loan, index) =>(
       <LoanInfo 
       		loan={loan} 
       		key={loan.id} 
       		checkAndRemove={checkAndRemove} 
       		addLoan={addLoan} 
       		creditFacilityId={creditFacilityId} 
       		index={index}
       		updateLoan={updateLoan}
   		/>
    ));
}

export default Loans;