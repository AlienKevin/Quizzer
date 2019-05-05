import React from "react";
import { AppBar, Typography } from "material-ui";

const Header = function(props) {
  return (
    <AppBar position="static">
      <Typography variant="title" color="inherit" style={{ padding: 10 }}>
        Quiz Maker
      </Typography>
    </AppBar>
  );
};

export default Header;
