import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import withReducer from 'app/store/withReducer';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import RoleTable from './RoleTable';
import reducer from './store/index';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

const RolePage = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="p-20 mb-[30px] my-[20px]">
      <div className="flex justify-between align-middle p-20 mb-16 shadow-2 rounded-12">
        <div>
          <h2>Roles available in the system</h2>
        </div>
        <Button
          variant="contained"
          onClick={handleOpen}
          className="bg-[#130687] text-white hover:text-black hover:bg-[#13068711] flex px-16 ml-auto "
          endIcon={<AddIcon />}
        >
          Create Role
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Box>
        </Modal>
      </div>
      <RoleTable />
    </div>
  );
};

export default withReducer('roleOperations', reducer)(RolePage);
