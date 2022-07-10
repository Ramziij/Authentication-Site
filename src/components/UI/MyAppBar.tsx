import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link, Outlet } from "react-router-dom";



const MyAppBar = () => {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Authentication
          </Typography>
          <Link to={"/"} style={{textDecoration:'none', color: 'white'}}><Button color="inherit">Home</Button></Link>
          <Link to={"/login"} style={{textDecoration:'none', color: 'white'}}><Button color="inherit">Login</Button></Link>
          <Link to={"/register"} style={{textDecoration:'none', color: 'white'}}><Button color="inherit">Sign Up</Button></Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default MyAppBar