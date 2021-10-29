import React, { createContext, useState } from "react";

export const ValidationsContext = createContext({});

export const ValidationsProvider = ({ children }) => {
  const [erros, setErros] = useState({});

  function validationWithName(action, value, name) {
    switch (action) {
      case "empty":
        empty(name, value);
        break;
      case "numberMinimum":
        numberMinimum(name, value);
        break;
      case "complete":
        isComplete(name, value);
        break;
      case "checkbox":
        isTrue(name, value);
        break;
      default:
        console.log("Essa validação não existe");
        break;
    }
  }

  function empty(name, e) {
    let err = "";
    if (e.length === 0 || e === " ") {
      err = `Campo ${name} é obrigatório!`;
    } else {
      err = "";
    }
    setErros((prevEvent) => {
      return { ...prevEvent, [name]: err };
    });
  }

  function numberMinimum(name, e) {
    let err = "";
    if (e.length <= 6) {
      err = `Campo ${name} precisa ter mais de 6 dígitos!`;
    } else {
      err = "";
    }
    setErros((prevEvent) => {
      return { ...prevEvent, [name]: err };
    });
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
      err = `Campo ${name} precisa estar completo!`;
    } else {
      err = "";
    }
    setErros((prevEvent) => {
      return { ...prevEvent, [name]: err };
    });
  }

  function isTrue(name, value) {
    console.log(value);
    let err = "";
    if (!value) {
      err = "Os termos precisam ser aceitos";
    } else {
      err = "";
    }
    setErros((prevEvent) => {
      return { ...prevEvent, [name]: err };
    });
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
