import React from "react";

import Panel from "./components/complexos/panel";
import { InfosProvider } from "./contexts/InfosProvider";
import { StateFormProvider } from "./contexts/StateFormProvider";
import { ValidationsProvider } from "./contexts/ValidationsProvider";

function App() {
  return (
    <ValidationsProvider>
      <InfosProvider>
        <StateFormProvider>
          <Panel />
        </StateFormProvider>
      </InfosProvider>
    </ValidationsProvider>
  );
}

export default App;
