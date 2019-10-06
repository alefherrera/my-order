import React from "react";
import Header from "../Header";
import Main from "../Main";
import DishesPage from "../DishesPage";
import { Router } from "@reach/router";
import { Container } from "@material-ui/core";
import DessertsPage from "../DessertsPage";
import ApperitizersPage from "../ApperitizersPage";

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
        </Router>
      </Container>
    </div>
  );
}

export default App;
