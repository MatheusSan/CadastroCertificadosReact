import React, { createContext, useEffect, useState } from "react";

export const StateFormContext = createContext({});

export const StateFormProvider = ({ children }) => {
  const [stateForm, setStateForm] = useState(0);

  function nextStateForm(){
    setStateForm(stateForm + 1);
  }

  function setStateManualy(arg){
    setStateForm(arg);
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
        setStateForm
      }}
    >
      { children }
    </StateFormContext.Provider>
  );
}