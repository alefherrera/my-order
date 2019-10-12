import React from "react";
import data from "../../data/drinks";
import MenuPage from "../../components/MenuPage";

function DrinksPage() {
  return <MenuPage {...data} />;
}

export default DrinksPage;
