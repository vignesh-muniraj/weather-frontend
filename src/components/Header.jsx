import React from "react";
import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";

export default function Header({ toggleTheme }) {
  return (
    <AppBar position="static" sx={{ mb: 2 }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Weather Dashboard
        </Typography>
        <IconButton color="inherit" onClick={toggleTheme}>
          <Brightness4Icon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
