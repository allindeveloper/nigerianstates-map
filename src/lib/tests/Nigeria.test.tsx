import { render } from "@testing-library/react";
import React from "react";
import { describe, expect, it } from "vitest";
import Nigeria from "../components/Nigeria";
import { State } from "../types/State";

describe("Nigeria component", () => {
  it("renders a map for every supported state and applies map props", () => {
    for (const state of new Set(Object.values(State))) {
      const id = `map-${state}`;
      const { container, unmount } = render(
        <Nigeria
          state={state}
          id={id}
          className="custom-map"
          hoverColor="purple"
          defaultColor="yellow"
        />,
      );

      expect(container.querySelector(`path[id="${id}"]`)).not.toBeNull();
      expect(container.querySelector(".custom-map")).not.toBeNull();
      expect(
        container.querySelector(".nigerian-state-map")?.getAttribute("style"),
      ).toContain("--map-hover-color: purple");
      unmount();
    }
  });
});
