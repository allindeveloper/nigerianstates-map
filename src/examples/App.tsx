import React from "react";
import { Nigeria } from "../lib";
import { State } from "../lib/types/State";

const App = () => {
  return (
    <div>
      <Nigeria
        state={State.ABIA}
        hoverColor="red"
        defaultColor="#184f95"
        id="abia"
        height={500}
      />
    </div>
  );
};

export default App;
