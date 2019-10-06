import React from "react";
import PropTypes from "prop-types";
import { Toolbar, AppBar, Typography } from "@material-ui/core";
import { Link } from "@reach/router";

function Header({ title, children }) {
  return (
    <AppBar>
      <Toolbar>
        <Link to="/">
          <Typography variant="h6">{title}</Typography>
        </Link>
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
