import { render } from "@testing-library/react";
import React from "react";
import { describe, expect, it } from "vitest";
import {
  Abia,
  Adamawa,
  AkwaIbom,
  Anambra,
  Bauchi,
  Bayelsa,
  Benue,
  Borno,
  CrossRiver,
  Delta,
  Ebonyi,
  Edo,
  Ekiti,
  Enugu,
  Fct,
  Gombe,
  Imo,
  Jigawa,
  Kaduna,
  Kano,
  Katsina,
  Kebbi,
  Kogi,
  Kwara,
  Lagos,
  Nasarawa,
  Niger,
  Ogun,
  Ondo,
  Osun,
  Oyo,
  Plateau,
  Rivers,
  Sokoto,
  Taraba,
  Yobe,
  Zamfara,
} from "../index";
import { State } from "../types/State";

const stateMaps = [
  ["Abia", Abia],
  ["Adamawa", Adamawa],
  ["Akwa Ibom", AkwaIbom],
  ["Anambra", Anambra],
  ["Bauchi", Bauchi],
  ["Bayelsa", Bayelsa],
  ["Benue", Benue],
  ["Borno", Borno],
  ["Cross River", CrossRiver],
  ["Delta", Delta],
  ["Ebonyi", Ebonyi],
  ["Edo", Edo],
  ["Ekiti", Ekiti],
  ["Enugu", Enugu],
  ["Federal Capital Territory", Fct],
  ["Gombe", Gombe],
  ["Imo", Imo],
  ["Jigawa", Jigawa],
  ["Kaduna", Kaduna],
  ["Kano", Kano],
  ["Katsina", Katsina],
  ["Kebbi", Kebbi],
  ["Kogi", Kogi],
  ["Kwara", Kwara],
  ["Lagos", Lagos],
  ["Nasarawa", Nasarawa],
  ["Niger", Niger],
  ["Ogun", Ogun],
  ["Ondo", Ondo],
  ["Osun", Osun],
  ["Oyo", Oyo],
  ["Plateau", Plateau],
  ["Rivers", Rivers],
  ["Sokoto", Sokoto],
  ["Taraba", Taraba],
  ["Yobe", Yobe],
  ["Zamfara", Zamfara],
] as const;

describe("state map components", () => {
  it.each(stateMaps)("renders the %s state map", (_name, MapComponent) => {
    const id = "state-map";
    const { container } = render(
      <MapComponent id={id} state={State.ABIA} className="custom-map" />,
    );

    expect(container.querySelector(`path#${id}`)).not.toBeNull();
    expect(container.querySelector(".custom-map")).not.toBeNull();
  });
});
