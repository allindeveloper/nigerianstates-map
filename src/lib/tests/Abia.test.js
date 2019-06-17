import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Abia from "../components/Abia";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("Abia Component", () => {
  test("renders", () => {
    const state = "Uchendu State";
    const val = 55;
    const renderData =
      '<div class="hoverinfo">' +
      "<h6>" +
      state +
      " State </h6>" +
      "Total No Of Farms - " +
      val +
      "" +
      "</div>";
    const wrapper = mount( <Abia hoverColor="green" hoverBackgroundColor="grey"renderData={renderData} defaultColor="#000000"id="kd"/>
    );

    expect(wrapper.exists()).toBe(true);
  });
});
