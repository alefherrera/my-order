import React from "react";
import PropTypes from "prop-types";
import { Toolbar, AppBar, Typography } from "@material-ui/core";

function Header({ title, children }) {
  return (
    <AppBar>
      <Toolbar>
        <Typography variant="h6">{title}</Typography>
      </Toolbar>
      {children}
    </AppBar>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.any
};

export default Header;
