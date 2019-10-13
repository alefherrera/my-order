import React from 'react';
import Header from '../Header';
import Main from '../../components/Main';
import DishesPage from '../DishesPage';
import { Router } from '@reach/router';
import { Container } from '@material-ui/core';
import DessertsPage from '../DessertsPage';
import ApperitizersPage from '../ApperitizersPage';
import DrinksPage from '../DrinksPage';
import AddItemDialog from '../AddItemDialog';
import OrderPage from '../OrderPage';
import data from '../../data/app';
import Footer from '../Footer';

function App() {
  return (
    <div className="App">
      <Header title={data.title} order={data.order}></Header>
      <Container fixed style={{ paddingTop: 100 }}>
        <Router>
          <Main path="/" />
          <DishesPage path="/dishes" />
          <DessertsPage path="/desserts" />
          <ApperitizersPage path="/apperitizers" />
          <DrinksPage path="/drinks" />
          <OrderPage path="/order" />
          <Explain default />
        </Router>
      </Container>
      <Footer />
      <AddItemDialog />
    </div>
  );
}

export default App;
