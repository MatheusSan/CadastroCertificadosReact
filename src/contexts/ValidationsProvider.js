import React, { createContext, useState } from "react";

export const ValidationsContext = createContext({});

export const ValidationsProvider = ({ children }) => {
  const [erros, setErros] = useState({
    name: '',
    nickname: '',
  });

  function validationWithName(action, value, name){
    console.log('Validando o campo: ' + name + " com valor: " + value);
    switch (action) {
      case 'empty':
        empty(name, value)
        break;
      case 'complete':
        isComplete(name, value)
        break;
    
      default:
        console.log('Essa validação não existe');
        break;
    }
  }

  function empty(name, e){
    let aux = erros;
    if(e.length === 0 || e === ' '){
      aux[name] = `Campo ${name} é obrigatório!`;
      setErros(aux);
    } else {
      aux[name] = "";
      setErros(aux);
    }
  }

  function isComplete(name, e){
    console.log("to validando o nome");
    let aux = erros;
    if(e.indexOf(' ') === -1){
      aux[name] = `Campo ${name} precisa estar completo!`;
      setErros(aux);
    } else {
      aux[name] = "";
      setErros(aux);
    }
  }


  return (
    <ValidationsContext.Provider
      value={{
        erros,
        validationWithName,
      }}
    >
      { children }
    </ValidationsContext.Provider>
  );
}