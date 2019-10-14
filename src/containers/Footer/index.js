import React from 'react';
import {
  BottomNavigation,
  BottomNavigationAction,
  Divider,
} from '@material-ui/core';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import CakeIcon from '@material-ui/icons/Cake';
import LocalDrinkIcon from '@material-ui/icons/LocalDrink';
import LocalDiningRoundedIcon from '@material-ui/icons/LocalDiningRounded';
import { Link } from '@reach/router';
import styled from 'styled-components';

const Container = styled.div`
  top: calc(100% - 56px);
  left: auto;
  right: 0;
  position: fixed;
  width: 100%;
`;

function Footer() {
  return (
    <Container>
      <Divider />
      <BottomNavigation showLabels>
        <BottomNavigationAction
          component={Link}
          to="/apperitizers"
          label="Entrada"
          icon={<FastfoodIcon />}
        />
        <BottomNavigationAction
          component={Link}
          to="/dishes"
          label="Platos"
          icon={<LocalDiningRoundedIcon />}
        />
        <BottomNavigationAction
          component={Link}
          to="/desserts"
          label="Postres"
          icon={<CakeIcon />}
        />
        <BottomNavigationAction
          component={Link}
          to="/drinks"
          label="Bebidas"
          icon={<LocalDrinkIcon />}
        />
      </BottomNavigation>
    </Container>
  );
}

export default Footer;
