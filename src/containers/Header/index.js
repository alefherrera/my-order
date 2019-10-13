import React from 'react';
import PropTypes from 'prop-types';
import { Toolbar, AppBar, Typography } from '@material-ui/core';
import { Link } from '@reach/router';

function Header({ title, order, children }) {
  return (
    <AppBar style={{ flexGrow: 1 }}>
      <Toolbar>
        <Link to="/" style={{ flexGrow: 1 }}>
          <Typography variant="h6">{title}</Typography>
        </Link>
        <Link to="/order">
          <Typography variant="h6">{order}</Typography>
        </Link>
      </Toolbar>
      {children}
    </AppBar>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  order: PropTypes.string.isRequired,
  children: PropTypes.any,
};

export default Header;
