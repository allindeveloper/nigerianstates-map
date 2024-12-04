import React from "react";
import { Nigeria } from "../lib";
import { State } from "../lib/types/State";

const App = () => {
  return (
    <div>
      <Nigeria
        state={State.LAGOS}
        hoverColor="purple"
        defaultColor="blue"
        id="lagos"
        height={100}
      />
    </div>
  );
};

export default App;
