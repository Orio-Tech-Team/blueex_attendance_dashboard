import { IconButton, Snackbar } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { AnyNsRecord } from 'dns';

interface Props {
  open: boolean;
  setOpen: any;
  message: string;
}

const MySnackbar = ({ open, setOpen, message }: Props) => {
  const handleClose = (event: any) => {
    setOpen(false);
  };

  const action = (
    <IconButton
      size="small"
      aria-label="close"
      color="inherit"
      onClick={handleClose}
    >
      <CloseIcon fontSize="small" />
    </IconButton>
  );

  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      message={message}
      action={action}
    />
  );
};

export default MySnackbar;
