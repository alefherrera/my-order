import React from "react";
import data from "../../data/desserts";
import MenuPage from "../../components/MenuPage";

function DessertsPage() {
  return <MenuPage {...data} />;
}

export default DessertsPage;
