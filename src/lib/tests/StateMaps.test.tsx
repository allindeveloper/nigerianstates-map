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

const stateMaps = [
  ["Abia", "abia", Abia],
  ["Adamawa", "adamawa", Adamawa],
  ["Akwa Ibom", "akwa-ibom", AkwaIbom],
  ["Anambra", "anambra", Anambra],
  ["Bauchi", "bauchi", Bauchi],
  ["Bayelsa", "bayelsa", Bayelsa],
  ["Benue", "benue", Benue],
  ["Borno", "borno", Borno],
  ["Cross River", "cross-river", CrossRiver],
  ["Delta", "delta", Delta],
  ["Ebonyi", "ebonyi", Ebonyi],
  ["Edo", "edo", Edo],
  ["Ekiti", "ekiti", Ekiti],
  ["Enugu", "enugu", Enugu],
  ["Federal Capital Territory", "federal-capital-territory", Fct],
  ["Gombe", "gombe", Gombe],
  ["Imo", "imo", Imo],
  ["Jigawa", "jigawa", Jigawa],
  ["Kaduna", "kaduna", Kaduna],
  ["Kano", "kano", Kano],
  ["Katsina", "katsina", Katsina],
  ["Kebbi", "kebbi", Kebbi],
  ["Kogi", "kogi", Kogi],
  ["Kwara", "kwara", Kwara],
  ["Lagos", "lagos", Lagos],
  ["Nasarawa", "nasarawa", Nasarawa],
  ["Niger", "niger", Niger],
  ["Ogun", "ogun", Ogun],
  ["Ondo", "ondo", Ondo],
  ["Osun", "osun", Osun],
  ["Oyo", "oyo", Oyo],
  ["Plateau", "plateau", Plateau],
  ["Rivers", "rivers", Rivers],
  ["Sokoto", "sokoto", Sokoto],
  ["Taraba", "taraba", Taraba],
  ["Yobe", "yobe", Yobe],
  ["Zamfara", "zamfara", Zamfara],
] as const;

describe("state map components", () => {
  it.each(stateMaps)(
    "renders the %s map with a generated id and no state prop",
    (_name, generatedId, MapComponent) => {
      const { container } = render(<MapComponent className="custom-map" />);

      expect(
        container.querySelector(`path[id="${generatedId}"]`),
      ).not.toBeNull();
      expect(container.querySelector(".custom-map")).not.toBeNull();
    },
  );

  it.each(stateMaps)(
    "appends a custom id to the generated %s map id",
    (_name, generatedId, MapComponent) => {
      const { container } = render(<MapComponent id="custom" />);

      expect(
        container.querySelector(`path[id="${generatedId}-custom"]`),
      ).not.toBeNull();
    },
  );
});
