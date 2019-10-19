import React from 'react';
import PropTypes from 'prop-types';
import { Toolbar, AppBar, Typography } from '@material-ui/core';
import { Link } from '@reach/router';
import styled from 'styled-components';

const getUrl = image =>
  //eslint-disable-next-line
  process.env.NODE_ENV === 'development' ? `/${image}` : `/my-order/${image}`;

const Container = styled.div`
  display: flex;
`;

function Header({ title, order, children }) {
  return (
    <AppBar style={{ flexGrow: 1 }}>
      <Toolbar>
        <Link to="/" style={{ flexGrow: 1 }}>
          <Container>
            <img
              height={32}
              style={{ marginRight: 10 }}
              src={getUrl('logo.png')}
            ></img>{' '}
            <Typography variant="h6">{title}</Typography>
          </Container>
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
