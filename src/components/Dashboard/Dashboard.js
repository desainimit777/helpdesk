import React from "react";
import { makeStyles } from "@mui/styles";
import { Paper } from "@mui/material";
import { Box } from "@mui/system";
import TocIcon from "@mui/icons-material/Toc";
import { IconButton } from "@mui/material";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import TicketItems from "../TicketItems";

const useStyles = makeStyles({
  card: {
    display: "inline-block",
    width: 290,
    marginTop: 15,
    marginLeft: 32,
    height: 200,
    textAlign: "center",
    backgroundColor: "#e1e8e8",
    color: "#111e24",
    border: "2px solid black",
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
    borderRadius: 30,
  },
  tablebutton: {
    marginLeft: 30,
  },
  ticketItem: {
    paddingTop: 15,
    fontSize: 18,
  },
  status: {
    fontWeight: "bold",
    fontSize: 18,
    color: "white",
    backgroundColor: "grey",
    borderRadius: 8,
    padding: "3px 10px",
    display: "inline-block",
    marginTop: 15,
  },
});

function Dashboard() {
  const classes = useStyles();
  return (
    <div>
      <Box
        sx={{
          marginTop: 7,
          width: `100%-30px`,
          textAlign: "left",
          ml: {
            xl: 23,
            md: 17,
            sm: 10,
            xs: 0,
          },
          mr: {
            xs: 5,
          },
        }}
        p={{ xs: 2, sm: 3, md: 5 }}
      >
        <IconButton component={Link} to="/demotable" sx={{ pl: 11 }}>
          <TocIcon fontSize="large" />
        </IconButton>
        <Box
          sx={{
            width: "80%",
            marginLeft: 7,
            marginTop: 5,
          }}
        >
          {TicketItems.map((items) => (
            <Paper className={classes.card}>
              <div>
                <Typography className={classes.ticketItem}>
                  {items.id}
                </Typography>
                <Typography className={classes.ticketItem}>
                  {items.title}
                </Typography>
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
                <Typography className={classes.ticketItem}>
                  {items.time}
                </Typography>
              </div>
            </Paper>
          ))}
        </Box>
      </Box>
    </div>
  );
}

export default Dashboard;
