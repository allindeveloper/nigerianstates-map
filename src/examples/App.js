import React, { Component } from "react";
import { Nigeria, Abia,Lagos, AkwaIbom, Anambra, Bauchi, Bayelsa } from "../lib";

class App extends React.Component {
  render() {
    const state = "State Info";
    const val = 55;
    const abiaData =
      '<div class="hoverinfo">' +
      "<h6>" +
      state +
      " </h6>" +
      "Total No Of Beneficiaries - " +
      val +
      "" +
      "</div>";
    const lagosData =
      '<div class="hoverinfo">' +
      "<h6>" +
      state +
      " </h6>" +
      "Total No Of Beneficiaries - " +
      val +
      "" +
      "</div>";
    return (
      <div>
        <Nigeria
          stateName="gombe"
          hoverColor="red"
          hoverBackgroundColor="grey"
          renderData={abiaData}
          defaultColor="green"
          id="kd"
        />
        <Abia
          // hoverColor="red"
          // hoverBackgroundColor="grey"
          // renderData={abiaData}
          // defaultColor="green"
          // id="kd"
        />
        <Lagos
          hoverColor="red"
          hoverBackgroundColor="grey"
          renderData={lagosData}
          defaultColor="green"
          id="ad"
        />
      </div>
    );
  }
}

export default App;
