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
          label="Entrada"
          icon={
            <Link to="/apperitizers">
              <FastfoodIcon />
            </Link>
          }
        />
        <BottomNavigationAction
          label="Platos"
          icon={
            <Link to="/dishes">
              <LocalDiningRoundedIcon />
            </Link>
          }
        />
        <BottomNavigationAction
          label="Postres"
          icon={
            <Link to="/desserts">
              <CakeIcon />
            </Link>
          }
        />
        <BottomNavigationAction
          label="Bebidas"
          icon={
            <Link to="/drinks">
              <LocalDrinkIcon />
            </Link>
          }
        />
      </BottomNavigation>
    </Container>
  );
}

export default Footer;
