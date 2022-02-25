import React from "react";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import { IconButton, TableSortLabel } from "@mui/material";
import { Link } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import { Typography } from "@mui/material";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TicketItems from "../TicketItems";
import GridViewIcon from "@mui/icons-material/GridView";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { TableFooter } from "@mui/material";
import { TablePagination } from "@mui/material";
import { Select, MenuItem } from "@mui/material";
import { useEffect } from "react";
import { Grid } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  tableHeaderCell: {
    backgroundColor: "lavender",
    fontWeight: "bold",
  },
  status: {
    fontWeight: "bold",
    fontSize: "0.75rem",
    color: "white",
    backgroundColor: "grey",
    borderRadius: 8,
    padding: "3px 10px",
    display: "inline-block",
  },
}));

function DemoTable() {
  const classes = useStyles();

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [ticketFilter, setticketFilter] = React.useState("");
  const [filterData, setFilterData] = React.useState(TicketItems);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  useEffect(() => {
    setFilterData(
      ticketFilter == "All"
        ? TicketItems
        : TicketItems.filter((data) => data.status == ticketFilter)
    );
  }, [ticketFilter]);

  useEffect(() => {
    setFilterData(TicketItems);
  }, []);

  return (
    <div>
      <Box
        sx={{
          marginTop: 8,
          textAlign: "left",
          ml: {
            xl: 20,
            md: 17,
            sm: 7,
            xs: 2,
          },
        }}
        p={{ xs: 2, sm: 3, md: 5 }}
      >
        <IconButton component={Link} to="/" sx={{ pl: 10 }}>
          <GridViewIcon fontSize="large" />
        </IconButton>
        <Select
          IconComponent={() => <FilterAltIcon />}
          onChange={(e) => setticketFilter(e.target.value)}
          value={ticketFilter}
        >
          <MenuItem value={"Closed"}>Closed</MenuItem>
          <MenuItem value={"In-Progress"}>In-Progress</MenuItem>
          <MenuItem value={"New"}>New</MenuItem>
          <MenuItem value={"All"}>All</MenuItem>
        </Select>
        <Grid>
          <Box
            sx={{
              width: "80%",
              marginLeft: 10,
              marginTop: 5,
            }}
          >
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell className={classes.tableHeaderCell}>
                      <TableSortLabel>Ticket Id</TableSortLabel>
                    </TableCell>
                    <TableCell
                      className={classes.tableHeaderCell}
                      align="right"
                    >
                      Ticket Title
                    </TableCell>
                    <TableCell
                      className={classes.tableHeaderCell}
                      align="right"
                    >
                      Ticket Status
                    </TableCell>
                    <TableCell
                      className={classes.tableHeaderCell}
                      align="right"
                    >
                      Ticket Time
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filterData
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((items) => (
                      <TableRow
                        key={items.id}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {items.id}
                        </TableCell>
                        <TableCell align="right">{items.title}</TableCell>
                        <TableCell align="right">
                          <Typography
                            className={classes.status}
                            style={{
                              backgroundColor:
                                (items.status == "Closed" && "green") ||
                                (items.status == "New" && "grey") ||
                                (items.status == "In-Progress" && "#d4c41c"),
                            }}
                          >
                            {items.status}
                          </Typography>
                        </TableCell>
                        <TableCell align="right">{items.time}</TableCell>
                      </TableRow>
                    ))}
                </TableBody>
                <TableFooter>
                  <TablePagination
                    rowsPerPageOptions={[5, 10, 15]}
                    component="div"
                    count={TicketItems.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                  />
                </TableFooter>
              </Table>
            </TableContainer>
          </Box>
        </Grid>
      </Box>
    </div>
  );
}

export default DemoTable;
