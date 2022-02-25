import React from "react";
import { makeStyles } from "@mui/styles";
import { Paper } from "@mui/material";
import { Box } from "@mui/system";
import TocIcon from "@mui/icons-material/Toc";
import { IconButton } from "@mui/material";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import AdminTicketItems from "../AdminTicketItems";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Menu } from "@mui/material";
import { MenuItem } from "@mui/material";
import { Divider } from "@mui/material";
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

const useStyles = makeStyles({
  card: {
    display: "inline-block",
    width: 340,
    marginTop: 15,
    marginLeft: 32,
    height: 230,
    textAlign: "center",
    backgroundColor: "#e1e8e8",
    border: "2px  black",
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
    borderRadius: 8,
  },
  divider : {
    width:'100%',
    height : 60,
    borderTopLeftRadius:8,
    borderTopRightRadius:8
},
ticketMenu: {
    display: "inline-block",
    width:40
  },
  tickettitle:{
      display:'inline-block',
      width:300,
      paddingTop:18,
      paddingLeft:30,
      fontSize:17,
      color:'#FFFFFF',
      fontWeight:'bold'
  },
  ticketId: {
    display: "inline-block",
    width:160,
    paddingLeft:15,
    textAlign:'left',
    paddingTop:15,
    fontSize:18
  },
  status: {
    fontStyle:'italic',
    display:'inline-block',
    width:180,
    fontSize:18
  },
  ticketuser:{
      color:'#5C5C5C',
      fontSize:18,
      textAlign:'left',
      paddingLeft:15,
      paddingTop:15
  },
  tickettime:{
      textAlign:'right',
      paddingTop:50,
      paddingRight:15,
      fontStyle:'italic',
      color:'#A9A9A9'
  },
  tablebutton: {
    marginLeft: 30,
  },
  ticketItem: {
    paddingTop: 11,
    fontSize: 18,
    textAlign:'left'
  }
});

function Admin() {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Box
        sx={{
          marginTop: 7,
          width: `100%-30px`,
          textAlign: "left",
          ml: {
            xl: 18,
            md: 16,
            sm: 10,
            xs: 0,
          },
          mr: {
            xs: 5,
          },
        }}
        p={{ xs: 2, sm: 3, md: 5 }}
      >
        <IconButton component={Link} to="/admintable" sx={{ pl: 11 }}>
          <TocIcon fontSize="large" />
        </IconButton>
        <IconButton component={Link} to="/userlist">
          <PeopleAltIcon fontSize="large" />
        </IconButton>
        <Box
          sx={{
            width: "100%",
            marginLeft: 7,
            marginTop: 5,
          }}
        >
          {AdminTicketItems.map((items) => (
            <Paper className={classes.card}>
              <div>
                  <div className={classes.divider} style={{
                    backgroundColor:
                      (items.status == "Closed" && "#00831D") ||
                      (items.status == "New" && "#8E8E8E") ||
                      (items.status == "In-Progress" && "#DFBD0B"),
                  }}>
              <Typography className={classes.tickettitle}>
                  {items.title}
                </Typography>
                <IconButton
                  className={classes.ticketMenu}
                  onClick={handleClick}
                  id="demo-positioned-button"
                >
                  <MoreVertIcon style={{ color: '#FFFFFF' }} />
                </IconButton>
                <Menu
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                >
                  <MenuItem>Close</MenuItem>
                  <Divider />
                  <MenuItem>Resolve</MenuItem>
                  <Divider />
                  <MenuItem>Traige</MenuItem>
                </Menu>
                </div>
                <Typography className={classes.ticketId}><Box component="span" fontWeight="bold">ID : </Box>{items.id}</Typography>
                <Typography
                  className={classes.status}
                  style={{
                    color:
                      (items.status == "Closed" && "#00831D") ||
                      (items.status == "New" && "#8E8E8E") ||
                      (items.status == "In-Progress" && "#DFBD0B"),
                  }}
                >
                <Box component="span" fontStyle="normal" fontWeight="bold" color="black"> Status : </Box>{items.status}
                </Typography>
                <Typography className={classes.ticketuser}>
                  <Box component="span" fontWeight="bold" color="black">Name : </Box>{items.createdBy}
                </Typography>
                <Typography className={classes.tickettime}>
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

export default Admin;
