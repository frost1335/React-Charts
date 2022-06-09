import React from "react";
import Area from "./components/Area";
import Bar from "./components/Bar";
import Line from "./components/Line";

const App = () => {
  return (
    <div>
      <div>
        <Line />
      </div>
      <div>
        <Area />
      </div>
      <div>
        <Bar />
      </div>
    </div>
  );
};

export default App;
