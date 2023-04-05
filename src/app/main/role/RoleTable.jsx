import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import withReducer from 'app/store/withReducer';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { roleAction } from './store/roleSlice';
import reducer from './store/index';

const RoleTable = () => {
  const { roles, loading, error } = useSelector((state) => state.roleOperations.roles);
  const dispatch = useDispatch();
  console.log(roles);

  useEffect(() => {
    dispatch(roleAction.getRoles());
  }, [dispatch]);

  return (
    <div className="RoleTable mt-10 w-[100%] ">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className="border-b-1 border-[#4444444c] text-center">Name</TableCell>
              <TableCell className="border-b-1 border-[#4444444c] text-center" align="right">
                Type
              </TableCell>
              <TableCell className="border-b-1 border-[#4444444c] text-center" align="right">
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {roles &&
              roles.map((item) => (
                <TableRow
                  key={item.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell
                    className="text-center border-b-1 border-[#4444444c] "
                    component="th"
                    scope="item"
                  >
                    {item.name}
                  </TableCell>
                  <TableCell
                    className="text-center border-b-1 border-[#4444444c] "
                    component="th"
                    scope="item"
                  >
                    {item.description}
                  </TableCell>
                  <TableCell className="text-center border-b-1 border-[#4444444c] flex align-middle gap-4 justify-center">
                    <EditOutlinedIcon className="text-yellow-500 cursor-pointer" />
                    <DeleteOutlineOutlinedIcon className="text-red-500 cursor-pointer" />
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default withReducer('roleOperations', reducer)(RoleTable);
