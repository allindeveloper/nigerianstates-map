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
      let plateauData =  '<div class="hoverinfo">' +
      "<h3>Edo State</h3>"+
      "<h5>PVHHTarget - " + 14000 +"</h5>"+
      "<h5>ZoneName - " + 34030+"</h5>"+
      "" +
      "</div>";
    return (
      <div>
        <Nigeria
          stateName="Zamfara"
          hoverColor="red"
          hoverBackgroundColor="grey"
          renderData={plateauData}
          defaultColor="green"
          id="lag"
          height={"100.0226150793651"}
        />
        {/* <Abia
        />
        <Lagos
          hoverColor="red"
          hoverBackgroundColor="grey"
          renderData={lagosData}
          defaultColor="green"
          id="lag"
        /> */}
      </div>
    )
  }
}

export default App;
