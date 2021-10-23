import React from "react";

import Panel from "./components/complexos/panel";
import { StateFormProvider } from "./contexts/StateFormProvider";
import { ValidationsProvider } from "./contexts/ValidationsProvider";

function App() {
  return (
    <ValidationsProvider>
      <StateFormProvider>
        <Panel />
      </StateFormProvider>
    </ValidationsProvider>
  );
}

export default App;
