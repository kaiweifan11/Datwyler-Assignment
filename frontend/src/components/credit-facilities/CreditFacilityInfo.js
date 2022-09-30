import React, { useState, useEffect } from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import DeleteIcon from '@material-ui/icons/Delete';
import { Button, Typography, IconButton } from '@material-ui/core';

import Loans from '../loans/Loans';

const CreditFacilityInfo = ({creditFacility, allLoans, removeCreditFacility, addLoan, removeLoan, updateLoan, handleOpenDialog}) =>{
	const [loans, setLoans] = useState([]);
	
	useEffect(() => {
		const newLoans = allLoans.filter(loan => loan.creditFacilityId === creditFacility.id);
		setLoans(newLoans);
	}, [allLoans]);
	
	const infoStyle = {
        padding:'10px',
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between',
        justifyItems: 'flex-start',
    }
    
    const iconUsername = {
	    display: 'flex',
	    justifyContent:'space-between',
	}
	
	const buttons = {
	    display: 'flex'
	}
	
	const addNewLoan =() =>{
		const exisitngNewLoans = loans.filter((loan) => loan.id === undefined);
		if(exisitngNewLoans.length>0){
			handleOpenDialog('Please register the new loan application before adding');
			return;
		} 
		const newLoan = {type: '', amount: 0, creditFacilityId: creditFacility.id};
		const newLoans = [...loans];
		newLoans.push(newLoan);
		setLoans(newLoans);
	}
    
    const checkAndRemove = (id, index) =>{
		// if id exists
		if(id){
			removeLoan(id);
		}else{
			// if id does not exist
			const newLoans = [...loans]
			newLoans.splice(index, 1);
			setLoans(newLoans);
		}
	}
    
    return(
		<div>
		    <div style={infoStyle}>
		        <div style={iconUsername}>
		            <AccountCircleIcon style={{color:"#138a04", margin:"0px 10px 0px 0px"}}/>
	            	<Typography variant="body1" color="text.secondary" gutterBottom>
			            {creditFacility.applicantName }
			        </Typography>
		        </div>
		
		        <div style={buttons}>
		            <Button size="small" color="primary" variant="outlined" onClick={addNewLoan}>Add New Loan</Button>
		            <IconButton color="secondary" onClick={(e) => removeCreditFacility(creditFacility.id)} >
		                <DeleteIcon />
		            </IconButton>
		        </div>
		    </div>
		    
		     <div>
	        	<Loans 
	        		loans={loans} 
	        		addLoan={addLoan} 
	        		checkAndRemove={checkAndRemove} 
	        		creditFacilityId={creditFacility.id} 
	        		updateLoan={updateLoan}
        		/>
	        </div>
	        <br/>
	    </div>
    );
}

export default CreditFacilityInfo;