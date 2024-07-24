import React from "react";
import { Nigeria } from "../lib";
import { State } from "../lib/types/State";

const App = () => {
  let stateData = '<div class="hoverinfo">' +
    "<h3>Abia</h3>" +
    "<h5>PVHHTarget - " + 14000 + "</h5>" +
    "<h5>ZoneName - " + 34030 + "</h5>" +
    "" +
    "</div>";

  let lagosData = '<div class="hoverinfo">' +
    "<h3>Lagos</h3>" +
    "<h5>PVHHTarget - " + 14000 + "</h5>" +
    "<h5>ZoneName - " + 34030 + "</h5>" +
    "" +
    "</div>";
  return (
    <div>
      <Nigeria
        state={State.ABIA}
        hoverColor="purple"
        hoverBackgroundColor="grey"
        renderData={stateData}
        showRenderData={true}
        defaultColor="yellow"
        id="abia"
        height={100.0226150793651}
      />

    </div>
  )
}

export default App;
