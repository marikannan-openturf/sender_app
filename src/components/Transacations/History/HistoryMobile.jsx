import * as React from 'react';
import { Stack, Typography } from '@mui/material'
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';

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

function createData(dates, amount, currency, type, reqrefid, status, reference, sender, recepient) {
  return { dates, amount, currency, type, reqrefid, status, reference, sender, recepient};
}

const rows = [
  createData('01-02-2020', 4000, 'dollar', 'type', 42342, 'status', 'reference', 'senderName', 'recepientname'),
  createData('02-02-2020', 4000, 'dollar', 'type', 42342, 'status', 'reference', 'senderName', 'recepientname'),
  createData('23-02-2020', 4000, 'dollar', 'type', 42342, 'status', 'reference', 'senderName', 'recepientname'),
  createData('19-02-2020', 4000, 'dollar', 'type', 42342, 'status', 'reference', 'senderName', 'recepientname'),
  createData('35-02-2020', 4000, 'dollar', 'type', 42342, 'status', 'reference', 'senderName', 'recepientname'),
  createData('19-02-2020', 4000, 'dollar', 'type', 42342, 'status', 'reference', 'senderName', 'recepientname'),
  createData('19-02-2020', 4000, 'dollar', 'type', 42342, 'status', 'reference', 'senderName', 'recepientname'),
  createData('20-02-2020', 4000, 'dollar', 'type', 42342, 'status', 'reference', 'senderName', 'recepientname'),
  createData('30-02-2020', 4000, 'dollar', 'type', 42342, 'status', 'reference', 'senderName', 'recepientname'),
  createData('11-02-2020', 4000, 'dollar', 'type', 42342, 'status', 'reference', 'senderName', 'recepientname'),
  createData('12-02-2020', 4000, 'dollar', 'type', 42342, 'status', 'reference', 'senderName', 'recepientname'),
  createData('13-02-2020', 4000, 'dollar', 'type', 42342, 'status', 'reference', 'senderName', 'recepientname'),
  createData('10-02-2020', 4000, 'dollar', 'type', 42342, 'status', 'reference', 'senderName', 'recepientname'),
  createData('07-02-2020', 4000, 'dollar', 'type', 42342, 'status', 'reference', 'senderName', 'recepientname'),
  createData('19-02-2020', 4000, 'dollar', 'type', 42342, 'status', 'reference', 'senderName', 'recepientname'),
].sort((a, b) => (a.dates < b.dates ? -1 : 1));

export default function HistoryMobile() {
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

  return (
    <Paper sx={{ paddingTop:3, paddingLeft:5, paddingRight:5, paddingBottom:5, }}>
    <Typography textAlign='center' pt={2} pb={2} fontSize={20} variant='h6' color="#404040">Mobile Transaction History</Typography>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="custom pagination table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Date</StyledTableCell>
            <StyledTableCell align="left">Amount</StyledTableCell>
            <StyledTableCell align="left">Curency</StyledTableCell>
            <StyledTableCell align="left">Type</StyledTableCell>
            <StyledTableCell align="left">Req Ref Id</StyledTableCell>
            <StyledTableCell align="left">Satus</StyledTableCell>
            <StyledTableCell align="left">Reference</StyledTableCell>
            <StyledTableCell align="left">Sender</StyledTableCell>
            <StyledTableCell align="left">Receipient</StyledTableCell>
            <StyledTableCell align="center">More</StyledTableCell>
          </TableRow>
      </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row) => (
            <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row" >{row.dates}</StyledTableCell>
                <StyledTableCell align="left">{row.amount}</StyledTableCell>
                <StyledTableCell align="left">{row.currency}</StyledTableCell>
                <StyledTableCell align="left">{row.type}</StyledTableCell>
                <StyledTableCell align="left">{row.reqrefid}</StyledTableCell>
                <StyledTableCell align="left">{row.status}</StyledTableCell>
                <StyledTableCell align="left">{row.reference}</StyledTableCell>
                <StyledTableCell align="left">{row.sender}</StyledTableCell>
                <StyledTableCell align="left">{row.recepient}</StyledTableCell>
                <StyledTableCell align="center">...</StyledTableCell>
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
  );
}
