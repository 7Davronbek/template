import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { useEffect } from 'react';
import { getRoles } from './store/roleSlice';

const RolePage = () => {
  useEffect(() => {
    getRoles();
  }, []);
  return (
    <div className="p-10">
      <Button
        variant="contained"
        className="bg-[#130687] text-white hover:text-black hover:bg-[#13068711] flex px-16 ml-auto"
        endIcon={<AddIcon />}
      >
        Create Role
      </Button>
    </div>
  );
};

export default RolePage;
