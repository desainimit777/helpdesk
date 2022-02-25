import React from "react";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import { IconButton, TableSortLabel } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import { Typography } from "@mui/material";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { TableFooter } from "@mui/material";
import { TablePagination } from "@mui/material";
import { Grid } from "@mui/material";
import UserList from "../UserList";
import BlockIcon from "@mui/icons-material/Block";
import { Tooltip } from "@mui/material";
import { TextField } from "@mui/material";
import { Select, MenuItem } from "@mui/material";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { useEffect } from "react";

const useStyles = makeStyles((theme) => ({
  tableHeaderCell: {
    backgroundColor: "lavender",
    fontWeight: "bold",
    fontSize: 18,
  },
}));

function UserTable() {
  const classes = useStyles();

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [userFilter, setuserFilter] = React.useState("");
  const [filterData, setFilterData] = React.useState(UserList);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  useEffect(() => {
    setFilterData(
      userFilter == "All"
        ? UserList
        : UserList.filter((data) => data.isblocked == userFilter)
    );
  }, [userFilter]);

  useEffect(() => {
    setFilterData(UserList);
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
        <Select
          sx={{ ml: 10 }}
          IconComponent={() => <FilterAltIcon />}
          onChange={(e) => setuserFilter(e.target.value)}
          value={userFilter}
        >
          <MenuItem value={"Yes"}>Blocked</MenuItem>
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
                      <TableSortLabel>User Id</TableSortLabel>
                    </TableCell>
                    <TableCell
                      className={classes.tableHeaderCell}
                      align="right"
                    >
                      First Name
                    </TableCell>
                    <TableCell
                      className={classes.tableHeaderCell}
                      align="right"
                    >
                      Last Name
                    </TableCell>
                    <TableCell
                      className={classes.tableHeaderCell}
                      align="right"
                    >
                      Email
                    </TableCell>
                    <TableCell
                      className={classes.tableHeaderCell}
                      align="right"
                    >
                      Blocked?
                    </TableCell>
                    <TableCell
                      className={classes.tableHeaderCell}
                      align="right"
                    >
                      Actions
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
                        <TableCell align="right">{items.firstname}</TableCell>
                        <TableCell align="right">
                          <Typography>{items.lastname}</Typography>
                        </TableCell>
                        <TableCell align="right">{items.email}</TableCell>
                        <TableCell align="right">{items.isblocked}</TableCell>
                        <TableCell align="right">
                          <Tooltip title="Block User">
                            <IconButton disabled={items.isblocked == "Yes"}>
                              <BlockIcon />
                            </IconButton>
                          </Tooltip>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
                <TableFooter >
                  <TablePagination 
                    rowsPerPageOptions={[5, 10, 15]}
                    component="div"
                    count={UserList.length}
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

export default UserTable;
