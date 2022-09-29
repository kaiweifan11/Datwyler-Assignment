import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogContentText, DialogActions, Typography, Button } from '@material-ui/core';

const SimpleDialog = ({isOpen, handleClose, msg}) =>{
	return (
		<Dialog onClose={handleClose} open={isOpen} >
			<DialogContent>
	            <Typography variant="subtitle1" component="div">
			        {msg}
			    </Typography>
	        </DialogContent>
	        <DialogActions>
	          <Button onClick={handleClose} autoFocus>
	          		Ok
	          </Button>
	        </DialogActions>
    		
    	</Dialog>
	)
}

export default SimpleDialog;