import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Card, CardHeader, CardMedia } from '@mui/material';
import TextField from '@mui/material/TextField';


const style = {
  position: 'absolute',
  textAlign: 'center',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({open,handleClose,test}) {


  return (
    <div>
     
      <Modal style={style}
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Keobiz
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              {/* {test.year} */}

              <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          label="Size"
          id="outlined-size-small"
          defaultValue="Smail"
          size="small"
          value={test.year}
        />
        <TextField label="Size" id="outlined-size-normal" defaultValue="Normal" />
      </div>
      <div>
        <TextField
          label="Size"
          id="filled-size-small"
          defaultValue="Small"
          variant="filled"
          size="small"
          value={test.date}
        />
        <TextField
          label="Size"
          id="filled-size-normal"
          defaultValue="Normal"
          variant="filled"
          value={test.sport}
        />
      </div>
      <div>
        <TextField
          label="Size"
          id="standard-size-small"
          defaultValue="Small"
          size="small"
          variant="standard"
          value={test.gold}
        />
        <TextField
          label="Size"
          id="standard-size-normal"
          defaultValue="Normal"
          variant="standard"
          value={test.sliver}
          
        />
      </div>
      <div>
<Button variant="contained" color="primary">
  Success
</Button>&nbsp;
<Button variant="outlined" color="error">
  Error
</Button>
      </div>
    </Box>

          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
