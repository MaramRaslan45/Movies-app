import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Badge } from "@mui/material";

import ChangeLanguage from "./Language";


export const NavBar = () => {
  const movie = useSelector((state)=>state.ADD)
  
  
  return (
  <>
  
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#001E3C" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" component="div" sx={{ mr: 3 }}>
            <Link
              to="/"
              style={{ textDecoration: "none", color: "whitesmoke" }}
            >
              TMDB
            </Link>
          </Typography>
          <Badge badgeContent={movie.length} color="primary" showZero>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link
              to="/Favorites"
              style={{ textDecoration: "none", color: "whitesmoke" }}
            >
              Favorites
            </Link>
          </Typography>
               </Badge>
        
      
               <ChangeLanguage/>
          <Button color="inherit" style={{left:'80%'}}>
            <Link
              to="/Login"
              style={{ textDecoration: "none", color: "whitesmoke" }}
            >
              Login
            </Link>
          </Button>
          <Button color="inherit" style={{left:'70%'}}>
            <Link
              to="/Register"
              style={{ textDecoration: "none", color: "whitesmoke" }}
            >
              Register
            </Link>
          </Button>
         
        </Toolbar>
      </AppBar>
    </Box>
    </>
  );
};
