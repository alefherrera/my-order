import React from "react";
import styled from "styled-components";
import data from "../../data/main";
import MainCard from "../MainCard";
import { Router } from "@reach/router";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

function Main() {
  return (
    <Container>
      <Router>
        {data.options.map(option => {
          return <MainCard key={option.title} {...option} />;
        })}
      </Router>
    </Container>
  );
}

export default Main;
