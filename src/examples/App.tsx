import React from "react";
import { Nigeria } from "../lib";
import { State } from "../lib/types/State";

const App = () => {
  return (
    <div>
      <Nigeria
        state={State.OGUN}
        hoverColor="purple"
        defaultColor="red"
        id="ogun"
        height={100}
      />
    </div>
  );
};

export default App;
