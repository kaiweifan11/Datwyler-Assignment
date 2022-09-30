import React from 'react';
import { Dialog, DialogContent, DialogActions, Typography, Button } from '@material-ui/core';

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