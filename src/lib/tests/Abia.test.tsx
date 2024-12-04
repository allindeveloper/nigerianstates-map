import React from "react";
import Nigeria from "../components/Nigeria";
import { State } from "../types/State";
import { render } from "@testing-library/react";

describe("Nigeria Component Renders State correctly", () => {
  test("renders State Map ", () => {
    const result = render(
      <Nigeria
        state={State.ABIA}
        hoverColor="purple"
        defaultColor="yellow"
        id="abia"
        height={100.0226150793651}
      />,
    );
    const pathElement = result.container.querySelector("#abia");
    expect(pathElement).toBeDefined();
  });
});
