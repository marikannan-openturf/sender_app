import * as React from 'react';
import { Container,Stack, Box, Button, Paper, Typography  } from '@mui/material';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import IconButton from "@mui/material/IconButton";


function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };


  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    fontSize: 13,
    fontWeight: 500,
    backgroundColor: '#4490fa',
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 11,
    fontWeight: 500,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(even)': {
    backgroundColor: theme.palette.action.hover,
  }, 
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(description, times, type, internalRef,externalRef, amt, currency, currentAmt, balance, desc) {
  return { description, times,  type, internalRef,externalRef, amt, currency, currentAmt, balance, desc};
}

const rows = [
  createData("description", 4,'type', 'InternalRef', "ExternalRef", 42342, 'dollar',3143, 42342, 'desc'),
  createData("description", 4,'type', 'InternalRef', "ExternalRef", 42342, 'dollar',3143, 42342, 'desc'),
  createData("description", 4,'type', 'InternalRef', "ExternalRef", 42342, 'dollar',3143, 42342, 'desc'),
  createData("description", 4,'type', 'InternalRef', "ExternalRef", 42342, 'dollar',3143, 42342, 'desc'),
  createData("description", 4,'type', 'InternalRef', "ExternalRef", 42342, 'dollar',3143, 42342, 'desc'),
  createData("description", 4,'type', 'InternalRef', "ExternalRef", 42342, 'dollar',3143, 42342, 'desc'),
  createData("description", 4,'type', 'InternalRef', "ExternalRef", 42342, 'dollar',3143, 42342, 'desc'),
  createData("description", 4,'type', 'InternalRef', "ExternalRef", 42342, 'dollar',3143, 42342, 'desc'),
  createData("description", 4,'type', 'InternalRef', "ExternalRef", 42342, 'dollar',3143, 42342, 'desc'),
  createData("description", 4,'type', 'InternalRef', "ExternalRef", 42342, 'dollar',3143, 42342, 'desc'),
  createData("description", 4,'type', 'InternalRef', "ExternalRef", 42342, 'dollar',3143, 42342, 'desc'),
  createData("description", 4,'type', 'InternalRef', "ExternalRef", 42342, 'dollar',3143, 42342, 'desc'),
  createData("description", 4,'type', 'InternalRef', "ExternalRef", 42342, 'dollar',3143, 42342, 'desc'),
  createData("description", 4,'type', 'InternalRef', "ExternalRef", 42342, 'dollar',3143, 42342, 'desc'),
  createData("description", 4,'type', 'InternalRef', "ExternalRef", 42342, 'dollar',3143, 42342, 'desc'),
].sort((a, b) => (a.dates < b.dates ? -1 : 1));

export default function Statement() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };


    function refreshPage(){ 
        window.location.reload(); 
    }

  return (
    <>
      <Stack p={6} >
        <Stack direction='row' justifyContent='space-between' spacing={5}>
        <Stack direction='row' mb={3}>
        <Typography textAlign='left' fontSize={20} fontFamily='Poppins' variant='h6' color="#404040">Statement</Typography> 
        </Stack>
        <Stack spacing={3}>
        <Button variant='contained' sx={{backgroundColor:'#4490fa'}} onClick={refreshPage} >Refresh</Button>
        </Stack>
        </Stack>
        <Paper sx={{ paddingTop:5, paddingLeft:5, paddingRight:5, paddingBottom:5, }}>
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="custom pagination table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Description</StyledTableCell>
                <StyledTableCell align="left">Times</StyledTableCell>
                <StyledTableCell align="left">Type</StyledTableCell>
                <StyledTableCell align="left">Internal Ref</StyledTableCell>
                <StyledTableCell align="left">External Ref</StyledTableCell>
                <StyledTableCell align="left">Amt</StyledTableCell>
                <StyledTableCell align="left">Currency</StyledTableCell>
                <StyledTableCell align="left">Converted Amt</StyledTableCell>
                <StyledTableCell align="left">Balance</StyledTableCell>
                <StyledTableCell align="left">Desc</StyledTableCell>
              </TableRow>
          </TableHead>
            <TableBody>
              {(rowsPerPage > 0
                ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                : rows
              ).map((row) => (
                <StyledTableRow key={row.description}>
                    <StyledTableCell component="th" scope="row" >{row.description}</StyledTableCell>
                    <StyledTableCell align="left">{row.times}</StyledTableCell>
                    <StyledTableCell align="left">{row.type}</StyledTableCell>
                    <StyledTableCell align="left">{row.internalRef}</StyledTableCell>
                    <StyledTableCell align="left">{row.externalRef}</StyledTableCell>
                    <StyledTableCell align="left">{row.amt}</StyledTableCell>
                    <StyledTableCell align="left">{row.currency}</StyledTableCell>
                    <StyledTableCell align="left">{row.currentAmt}</StyledTableCell>
                    <StyledTableCell align="left">{row.balance}</StyledTableCell>
                    <StyledTableCell align="left">{row. desc}</StyledTableCell>
                  </StyledTableRow>
              ))}
    
              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                  colSpan={10}
                  count={rows.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  SelectProps={{
                    inputProps: {
                      'aria-label': 'rows per page',
                    },
                    native: true,
                  }}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                  ActionsComponent={TablePaginationActions}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
        </Paper>
      </Stack>
    </>
  )
}
