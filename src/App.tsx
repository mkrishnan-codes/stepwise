import "./App.css";

import React, { useMemo, useState } from "react";

import StepWise from "./component/stepwise/StepWise";
import { IStep } from "./component/stepwise/types";

function App() {
  const [config] = useState<IStep[]>([
    { id: "orderPlaced", completion: 100, name: "Order Placed" },
    { id: "dispatched", completion: 100, name: "Dispatched" },
    { id: "reachedHub1", completion: 100, name: "Reached Hub 1" },
    { id: "reachedHub2", completion: 100, name: "Reached Hub 2" },
    { id: "reachedNearest", completion: 100, name: "Reached Nearest Station" },
    { id: "delivered", completion: 0, name: "Delivered" },
  ]);

  return (
    <div className="App">
      <StepWise
        config={config}
        direction="horizontal"
        labelPlacement="top"
      />
    </div>
  );
}

export default App;
