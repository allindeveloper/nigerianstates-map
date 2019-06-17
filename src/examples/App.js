import React, { Component } from "react";
import { Nigeria, Abia,Lagos, AkwaIbom, Anambra, Bauchi, Bayelsa, Kaduna } from "../lib";
import Ekiti from "../lib/components/Ekiti";

class App extends React.Component {
  render() {
    const state = "State Info";
    const val = 55;
    const abiaData =
      '<div class="hoverinfo">' +
      "<h6>" +
      state +
      " </h6>" +
      "Total No Of Farms - " +
      val +
      "" +
      "</div>";
    const lagosData =
      '<div class="hoverinfo">' +
      "<h6>" +
      state +
      " </h6>" +
      "Total No Of Farms - " +
      val +
      "" +
      "</div>";
      const plateauData =
      '<div class="hoverinfo">' +
      "<h6>" +
      state +
      " </h6>" +
      "Total No Of Farms - " +
      val +
      "" +
      "</div>";
    return (
      <div>
        <Nigeria
          stateName="plateau"
          hoverColor="red"
          hoverBackgroundColor="grey"
          renderData={plateauData}
          defaultColor="green"
          id="plat"
        />
        <Kaduna
        />
        <Lagos
          hoverColor="red"
          hoverBackgroundColor="grey"
          renderData={lagosData}
          defaultColor="green"
          id="lag"
        />
      </div>
    );
  }
}

export default App;
