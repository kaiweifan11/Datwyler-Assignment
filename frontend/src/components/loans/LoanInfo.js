import React, { useState } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import { Select, MenuItem, InputLabel, Card, CardContent, CardActions, Button, TextField, Typography } from '@material-ui/core';

const LoanInfo = ({loan, checkAndRemove, addLoan, creditFacilityId, index, updateLoan}) =>{
	const [loanDetails, setLoanDetails] = useState(loan);
	const [isDisabled, setIsDisabled] = useState(!!loanDetails.id);
	const [isAmountError, setIsAmountError] = useState(false);
    
	const inputs = {
		display: 'inline-block',
	    textAlign: 'center', 
	    margin: '10px 20px 0px'
	}
	
	const onChangeType = (e) =>{
		let newLoanDetails = {...loanDetails};
		newLoanDetails.type = e.target.value;
		setLoanDetails(newLoanDetails);
	}
	
	const onChangeAmount = (e) =>{
		let newLoanDetails = {...loanDetails};
		newLoanDetails.amount = e.target.value;
		setLoanDetails(newLoanDetails);
	}
	
	const onRemoveLoan = (id) =>{
		checkAndRemove(id, index);
	}
	
	const onAddLoan = () =>{
		//validations
		if(loanDetails.amount <= 0){
			setIsAmountError(true);
			return;
		}else{
			setIsAmountError(false);
		}
		
		if(!loanDetails.id) addLoan(loanDetails);
		else {
			updateLoan(loanDetails);
			setIsDisabled(true);
		}
	}
	
	const editLoan = () =>{
		setIsDisabled(false);
	}
	
    return(
        <div style={{maxWidth: '90%', margin: 'auto', paddingTop: 10}}>
        	<Card sx={{ padding: 20 }} style={{backgroundColor: "#ffebcd"}}>
        		<CardContent>
        			<div>
	        			<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
				          	{loanDetails.id? `Existing Loan Id: ${loanDetails.id}`: 'New Loan Application'}
				        </Typography>
        			</div>
		            <div style={{display:'flex', justifyContent:'space-between', }}>
			            <div style={{display:'flex' }}>
				            <div style={inputs}>
					            <InputLabel id="demo-simple-select-label">Loan Type</InputLabel>
							 	<Select disabled={isDisabled} style={{minWidth: 160}} value={loanDetails.type? loanDetails.type: 'home'} onChange={onChangeType}>
							      <MenuItem value={'home'}>Home Loan</MenuItem>
							      <MenuItem value={'car'}>Car Loan</MenuItem>
							      <MenuItem value={'personal'}>Personal Loan</MenuItem>
							    </Select>
						    </div>
						    <div style={{...inputs, float: 'right'}}>
				                <TextField
				                	style={{minWidth: 60}}
				                	disabled={isDisabled}
						          	id="outlined-number"
						          	label="Amount SGD$" 
						          	type="number"
						          	value={loanDetails.amount}
				                    onChange={onChangeAmount}
				                    error={isAmountError}
				                    helperText={isAmountError? "Amount must be bigger than 0": null}
						        />
						    </div>
					    </div>
		                
		                <div style={inputs}>
		                	<div style={{display: 'inline-flex'}}>
			               		{isDisabled && <IconButton color="primary" size='small' onClick={editLoan} >
				                    <EditIcon />
				                </IconButton>}
				                <IconButton color="secondary" size='small' onClick={(e) => onRemoveLoan(loan.id)} >
				                    <DeleteIcon />
				                </IconButton>
			                </div>
			            </div>
		            </div>
        		</CardContent>
	            <CardActions style={{float: 'right'}}>
			        {!isDisabled && <Button size="large" color="primary" onClick={onAddLoan}>{loanDetails.id? 'Update Loan': 'Register Loan'}</Button>}
			    </CardActions>
	
            </Card>
        </div>
    );
}

export default LoanInfo;