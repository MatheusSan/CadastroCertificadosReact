import React, { createContext, useEffect, useState } from "react";

export const ValidationsContext = createContext({});

export const ValidationsProvider = ({ children }) => {
  const [erros, setErros] = useState({});

  useEffect(()=>{
    console.log(erros);
  },[erros]);

  function validationWithName(action, value, name) {
    let valid = false;
    switch (action) {
      case "empty":
        valid = empty(name, value);
        break;
      case "numberMinimum":
        valid = numberMinimum(name, value);
        break;
      case "complete":
        valid = isComplete(name, value);
        break;
      case "checkbox":
        valid = isTrue(name, value);
        break;
      default:
        console.log("Essa validação não existe");
        break;
    }
    return valid;
  }

  function empty(name, e) {
    let err = "";
    if (e.length === 0 || e === " ") {
      err = `${name} field is required!`;
    }
    setErros((prevEvent) => {
      return { ...prevEvent, [name]: err };
    });
    return err === "" ? true : false;
  }

  function numberMinimum(name, e) {
    let err = "";
    if (e.length <= 6) {
      err = `${name} field must be longer than 6 digits!`;
    }
    setErros((prevEvent) => {
      return { ...prevEvent, [name]: err };
    });
    return err === "" ? true : false;
  }

  function isComplete(name, value) {
    let err = "";
    let args = "";
    switch (name) {
      case "email":
        args = ("@", ".com");
        break;
      case "name":
      case "institution":
      case "graduation":
        args = " ";
        break;
      case "github":
        args = "github.com";
        break;
      case "linkedin":
      case "team name":
      case "certificates-1":
      case "certificates-2":
      case "certificates-3":
      case "certificates-4":
      case "certificates-5":
        args = "linkedin.com";
        break;
      default:
        args = "";
        break;
    }
    if (args !== "" && value !== "" && !verificaString(value, args)) {
      err = `Field ${name} must be complete!`;
    }
    setErros((prevEvent) => {
      return { ...prevEvent, [name]: err };
    });
    return err === "" ? true : false;
  }

  function isTrue(name, value) {
    let err = "";
    if (!value) {
      err = "Terms need to be accepted";
    }
    setErros((prevEvent) => {
      return { ...prevEvent, [name]: err };
    });
    return err === "" ? true : false;
  }

  function haveError() {
    for (var key in erros) {
      if (erros[key] !== "") {
        return true;
      }
    }
    return false;
  }

  function verificaString(word, ...character) {
    //Função que testa uma string com todos os caracteres passados
    let flag = true;
    character.forEach((c) => {
      //Testa cada caractere se existe na palavra (var. word)
      if (word.indexOf(c) === -1) {
        flag = false; //Se não encontrar algum caractere passado, altera a flag pra que a função retorne falso
      }
    });
    return flag; //Se todos os caracteres forem encontrados retorna true
  }

  return (
    <ValidationsContext.Provider
      value={{
        erros,
        haveError,
        validationWithName,
      }}
    >
      {children}
    </ValidationsContext.Provider>
  );
};
