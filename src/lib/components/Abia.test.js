import React from "react";
import Abia from "./Abia";
import renderer from "react-test-renderer";

describe("Abia Renders Properly", () => {
  it("renders properly", () => {
    const state = "Uchendu State";
     const val = 55;
    const renderData =  '<div class="hoverinfo">' +
     "<h6>" +
      state+
     " State </h6>" +
     "Total No Of Beneficiaries - " +
     val +
     "" +
     "</div>";
    const tree = renderer
      .create(
        <Abia
        hoverColor="green"
        hoverBackgroundColor="grey"
        renderData={renderData}
        defaultColor="#000000"
        id="kd"
         /> ,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
