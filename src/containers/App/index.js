import React from 'react';
import Header from '../../components/Header';
import Main from '../../components/Main';
import DishesPage from '../DishesPage';
import { Router } from '@reach/router';
import { Container } from '@material-ui/core';
import DessertsPage from '../DessertsPage';
import ApperitizersPage from '../ApperitizersPage';
import DrinksPage from '../DrinksPage';
import AddItemDialog from '../AddItemDialog';

function App() {
  return (
    <div className="App">
      <Header title="My Order"></Header>
      <Container fixed style={{ paddingTop: 100 }}>
        <Router>
          <Main path="/" />
          <DishesPage path="/dishes" />
          <DessertsPage path="/desserts" />
          <ApperitizersPage path="/apperitizers" />
          <DrinksPage path="/drinks" />
        </Router>
      </Container>
      <AddItemDialog />
    </div>
  );
}

export default App;
