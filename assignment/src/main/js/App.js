import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Header from '../../../frontend/src/components/layouts/Header';
import RegisterCreditFacility from '../../../frontend/src/components/register-credit-facility/RegisterCreditFacility';
import CreditFacilities from '../../../frontend/src/components/credit-facilities/CreditFacilities'; 
import CreditFacilitiesWrapper from '../../../frontend/src/components/credit-facilities/CreditFacilitiesWrapper'; 
import CreditFacilitiesHeader from '../../../frontend/src/components/credit-facilities/CreditFacilitiesHeader';
import SimpleDialog from '../../../frontend/src/components/simple-dialog/SimpleDialog';
import axios from "axios";

const container = {
    background: '#c0c0c0',
    paddingBottom: 10,
}

const App = () =>{
	const [creditFacilities, setCreditFacilities] = useState([]);
	const [allLoans, setAllLoans] = useState([]);
	const [isDisplayCreditFacilitiesHeader, setIsDisplayCreditFacilitiesHeader] = useState(creditFacilities.length>0);
	const [isDialogOpen, setIsDialogOpen] = useState(false);
	const [dialogMessage, setDialogMessage] = useState('');
	
	useEffect(() => {
		axios.get('/creditFacility/all')
            .then(response => setCreditFacilities(response.data))
            .catch(error => {
			    setDialogMessage(`An error has occurred. Please try again.`)
                setIsDialogOpen(true);
			});
        axios.get('/loan/all')
            .then(response => setAllLoans(response.data))
            .catch(error => {
			    setDialogMessage(`An error has occurred. Please try again.`)
                setIsDialogOpen(true);
			});
	}, []);
	
	useEffect(() => {
		if(creditFacilities.length>0){
			setIsDisplayCreditFacilitiesHeader(true);
		}else{
			setIsDisplayCreditFacilitiesHeader(false);
		}
	}, [creditFacilities]);
	
	const addCreditFacility = (newCreditFacility) =>{
        axios.post('/creditFacility/save',newCreditFacility)
            .then(
                (response) =>{
                    setCreditFacilities([...creditFacilities,response.data]);
                }
            ).catch(error => {
			    setDialogMessage(`An error has occurred. Please try again.`)
                setIsDialogOpen(true);
			});
    }
    
    const removeCreditFacility = (id) =>{
        axios.delete(`/creditFacility/${id}`)
	        .then(
	            response =>{
					const newcreditFacilities = creditFacilities.filter(creditfacility => creditfacility.id !== id);
					setCreditFacilities(newcreditFacilities);
				}
	        ).catch(error => {
			    setDialogMessage(`An error has occurred. Please try again.`)
                setIsDialogOpen(true);
			});
    }
    
    const addLoan = (newLoan) =>{
        axios.post('/loan/save', newLoan)
            .then(
                (response) =>{
                    setAllLoans([...allLoans,response.data]);
                }
            ).catch(error => {
			    setDialogMessage(`An error has occurred. Please try again.`)
                setIsDialogOpen(true);
			});
    }
    
    const removeLoan = (id) =>{
        axios.delete(`/loan/${id}`)
	        .then(
	            response =>{
					const newLoans = allLoans.filter(loan => loan.id !== id);
					setAllLoans(newLoans);
				}
	        )
	        .catch(error => {
			    setDialogMessage(`An error has occurred. Please try again.`)
                setIsDialogOpen(true);
			});
    }
    
    const updateLoan = (newLoan) =>{
		axios.put(`/loan/${newLoan.id}`, newLoan)
            .then(
                (response) =>{
					setDialogMessage(`Loan id: ${response.data.id} is updated`)
                    setIsDialogOpen(true);
                }
            ).catch(error => {
			    setDialogMessage(`An error has occurred. Please try again.`)
                setIsDialogOpen(true);
			});
	}
	
	const handleCloseLoanDialog = () =>{
		setIsDialogOpen(false);
	}
    
    return (
        <div style={container}>
            <Header/>
            <RegisterCreditFacility addCreditFacility={addCreditFacility} />
             {isDisplayCreditFacilitiesHeader && 
	             <CreditFacilitiesWrapper>
		            <CreditFacilitiesHeader />
		            <CreditFacilities 
		            	creditFacilities={creditFacilities} 
		            	allLoans={allLoans}
		            	removeCreditFacility={removeCreditFacility} 
		            	addLoan={addLoan}
		            	removeLoan={removeLoan}
		            	updateLoan={updateLoan}
		        	/>
	        	</CreditFacilitiesWrapper>
        	}
        	<SimpleDialog isOpen={isDialogOpen} handleClose={handleCloseLoanDialog} msg={dialogMessage}/>
        </div>
    );
}

export default App;
ReactDOM.render(<App />, document.querySelector("#app"));