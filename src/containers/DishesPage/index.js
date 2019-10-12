import React from "react";
import data from "../../data/dishes";
import MenuPage from "../../components/MenuPage";

function DishesPage() {
  return <MenuPage {...data} />;
}

export default DishesPage;
