import React, { createContext, useContext, useEffect, useState } from "react";
import { InfosContext } from "./InfosProvider";
import { ValidationsContext } from "./ValidationsProvider";

export const StateFormContext = createContext({});

export const StateFormProvider = ({ children }) => {
  const { haveError } = useContext(ValidationsContext);
  const { name, email, age, checked, github } = useContext(InfosContext);
  const [stateForm, setStateForm] = useState(0);

  function nextStateForm() {
    setStateForm(stateForm + 1);
  }

  function setStateManualy(arg) {
    if (!haveError()){
      if (arg === 1 && name !== "" && email !== "" && age !== "" && checked === true){
        setStateForm(arg);
      }
      if (arg === 2 && github !== ""){
        setStateForm(arg);
      }
      if (arg === 0){
        setStateForm(arg);
      }
    }
  }

  useEffect(() => {
    if(stateForm > 2 || stateForm < 0){
      setStateForm(0);
    }
  });

  return (
    <StateFormContext.Provider
      value={{
        stateForm,
        nextStateForm,
        setStateManualy,
        setStateForm,
      }}
    >
      {children}
    </StateFormContext.Provider>
  );
};
