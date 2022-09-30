import React from 'react';

const wrapperStyle = {
	margin: 10,
    background: 'white',
    borderRadius: 10,
    padding: 10
}

const CreditFacilitiesWrapper = ({children}) =>{
	return (
		<div style={wrapperStyle}>
			{children}
		</div>
	)
}

export default CreditFacilitiesWrapper;