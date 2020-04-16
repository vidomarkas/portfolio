import React from "react";
import Grid from "./Grid";
import Tabs from "./Tabs";

function MainMenu() {
  return (
    <div className="perspective-parent">
      <Tabs />
      <Grid />
    </div>
  );
}

export default MainMenu;
