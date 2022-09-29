import React, { useState } from "react";
import { Button, TextField, Typography } from '@material-ui/core';

const inputStyle = {
    flex:'5',
    padding:'5px',
    margin:'10px 10px 0px 0px'
}

const wrapperStyle = {
	margin: 10,
    background: 'white',
    borderRadius: 10,
    padding: 10
}

const RegisterCreditFacility = ({addCreditFacility}) =>{
	const [creditFacility, setcreditFacility] = useState({applicantName: '', loan: null});
	
	const onChange = (e) =>{
		const newCreditFacility = {...creditFacility}
		newCreditFacility.applicantName = e.target.value;
		setcreditFacility(newCreditFacility);
    }

    const onSubmit = (e) =>{
        e.preventDefault();
        addCreditFacility(creditFacility);
        // reset after submit
        setcreditFacility({applicantName: '', loan: null});
    }
    
	return(
        <form onSubmit={onSubmit}>
        	<div style={wrapperStyle}>
	        	<Typography variant="h6" color="text.secondary" gutterBottom>
		          	Open a new credit facility
		        </Typography>
	            <div style={{display:'flex', paddingLeft: 20}}>
	                <TextField
					  	required
					  	id="outlined-required"
					  	label="Applicant Name (Required)"
					  	style={inputStyle}
	                    value={creditFacility.applicantName}
	                    onChange={onChange}
					/>
	                <Button size="large" color="primary" variant="contained" type="submit">Create</Button>
	             </div>
        	</div>
        </form>
    )
}

export default RegisterCreditFacility;