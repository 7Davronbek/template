import withReducer from 'app/store/withReducer';
import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { useSelector, useDispatch } from 'react-redux';
import _ from 'lodash';
import { Chip, Skeleton, Typography } from '@mui/material';
import { useEffect } from 'react';
import reducer from './store';
import { selectUsersList, getUsersList } from './store/getUsersList';
import { getSingleUserRole } from './store/singleUserRolesSlice';

const headerParams = {
  firstName: 'Исм',
  lastName: 'Фамилия',
  email: 'Э-почта',
  userName: 'Фойдаланувчи номи',
  isActive: 'Холати',
};

// TABLE SKELETON(LOADER CREATOR) COMPONENT
function TableSkeleton(props) {
  return Array(props.loaderrow)
    .fill(null)
    .map((val, i) => (
      <TableRow key={i}>
        {Array(props.loadercol)
          .fill(null)
          .map((column, j) => (
            <TableCell key={j}>
              <Skeleton variant="rounded" animation="wave" />
            </TableCell>
          ))}
      </TableRow>
    ));
}

function AccountingDashboardApp(props) {
  const [page, setPage] = React.useState(0);
  const usersList = useSelector(selectUsersList);
  const [rowsPerPage, setRowsPerPage] = React.useState(25);

  console.log(usersList)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsersList());
    dispatch(getSingleUserRole());
  }, [dispatch]);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ overflow: 'hidden', margin: '20px' }}>
      <TableContainer sx={{ maxHeight: '85vh' }}>
        <Table stickyHeader className="simple" aria-label="sticky table">
          <TableHead>
            <TableRow>
              {Object.entries(headerParams).map(([key, name]) => (
                <TableCell align="center" key={key}>
                  <Typography
                    color="text.secondary"
                    className="font-semibold text-12 whitespace-nowrap"
                  >
                    {name}
                  </Typography>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {/* {!_.isEmpty(usersList?.entities) ? (
              usersList?.entities
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => (
                  <TableRow
                    className="border-solid border-1 border-sky-500 hover:text-white hover:bg-[#38588d0a] hover:border-white hover:rounded-sm"
                    style={{ cursor: 'pointer' }}
                  >
                    {Object.entries(headerParams).map(([key, name]) => {
                      switch (key) {
                        case 'isActive':
                          return (
                            <TableCell align="center" key={key} component="th" scope="row">
                              {row[key] ? (
                                <Chip color="success" label="Фаол" />
                              ) : (
                                <Chip color="warning" label="Но Фаол" />
                              )}
                            </TableCell>
                          );
                        default:
                          return (
                            <TableCell align="center" key={key} component="th" scope="row">
                              <Typography className="" color="text.secondary">
                                {row[key]}
                              </Typography>
                            </TableCell>
                          );
                      }
                    })}
                  </TableRow>
                ))
            ) : ( */}
              <TableSkeleton loadercol={5} loaderrow={5} />
            {/* )} */}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[25, 50, 100]}
        component="div"
        // count={usersList.entities.length}
        rowsPerPage={rowsPerPage}
        labelRowsPerPage="Сахифадаги маълумотлар сони"
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

export default withReducer('adminOperation', reducer)(AccountingDashboardApp);
