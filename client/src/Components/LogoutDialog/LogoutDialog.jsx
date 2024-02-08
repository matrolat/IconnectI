import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

export default function LogoutDialog({setPopup,handleLogout}) {
  const theme = useTheme();

  const handleClose = () => {
    setPopup(false);
  };

  return (
    <React.Fragment>
      
      <Dialog
        open={true}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Do you want to logout ?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
          {/* Do you want to logout ? */}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            NO
          </Button>
          <Button onClick={handleLogout} autoFocus>
            YES
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
