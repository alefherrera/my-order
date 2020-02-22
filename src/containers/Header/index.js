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

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Text = styled(Typography)({
  color: 'white',
});

function Header({ title, order, children }) {
  return (
    <AppBar style={{ flexGrow: 1 }}>
      <Toolbar>
        <HeaderContainer>
          <Link to="/">
            <Container>
              <img
                height={32}
                style={{ marginRight: 10 }}
                src={getUrl('logo.png')}
                alt="logo"
              ></img>{' '}
              <Text variant="h6">{title}</Text>
            </Container>
          </Link>
          <Link to="/order">
            <Text variant="h6">{order}</Text>
          </Link>
        </HeaderContainer>
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
