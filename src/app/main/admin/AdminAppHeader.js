import Button from '@mui/material/Button';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import { useNavigate } from 'react-router-dom';

function AdminAppHeader(props) {
  const navigate = useNavigate();
  return (
    <div className="flex w-full container">
      <div className="flex flex-col sm:flex-row flex-auto sm:items-center min-w-0 p-24 md:p-32 pb-0 md:pb-0">
        <div className="flex items-center mt-24 sm:mt-0 sm:mx-8 space-x-12">
          <Button
            onClick={() => navigate(-1)}
            className="whitespace-nowrap"
            startIcon={<FuseSvgIcon size={30}>heroicons-solid:arrow-left</FuseSvgIcon>}
          >
            Фойдаланувчилар рўйхати
          </Button>
        </div>
      </div>
    </div>
  );
}

export default AdminAppHeader;
