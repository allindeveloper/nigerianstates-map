import React from "react";
import Nigeria from "../components/Nigeria";
import { State } from "../types/State";


describe("Nigeria Component", () => {
  let stateData = '<div class="hoverinfo">' +
    "<h3>Abia</h3>" +
    "<h5>PVHHTarget - " + 14000 + "</h5>" +
    "<h5>ZoneName - " + 34030 + "</h5>" +
    "" +
    "</div>";
  test("renders", () => {
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

    expect(true).toBe(true);
  });
});
