/*
Implementar aqui as três funções de validação (form 1, 2 e 3).
Essas serão chamadas no FormsController.js a cada clique dos botões.
*/
var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);

function validationForm1() {
  let validationItems = $$(".input-tab1"); //Seleciona todos os inputs da tab1
  let flag = true; // Flag de retorno da função

  validationItems.forEach((item) => {
    let validations = {
      //Variável que contém a validação específica de cada campo e sua msg de aviso, sendo a chave o id do campo
      nome: {
        val: verificaString(item.value, " "),
        warning: "Your name need to be complete!",
      },
      nickname: {
        val: item.value.indexOf(" ") === -1,
        warning: "Your nickname cannot be blank!",
      },
      email: {
        val: verificaString(item.value, "@", ".com"),
        warning: "Your e-mail need to be valid !",
      },
      telefone: {
        val: !isNaN(item.value.split(" ").join("")),
        warning: "Your phone must only numbers!",
      },
      data: {
        val: !isNaN(item.value.split("-").join("")),
        warning: "Your birthday need to be valid!",
      },
      idade: {
        val: !isNaN(item.value),
        warning: "Enter your age correctly, only number!",
      },
      termos: {
        val: item.checked,
        warning: "We need that you to accept the terms!",
      },
    };
    if (!validateItem(item, validations[item.name])) {
      //Testa cada item na função de validação
      flag = false; //Caso falhe em algum campo, altera para false a variável de retorno da função
    }
  });
  return flag;
}

//TODO:(Matheus Santos) Implementar validação do tab2 aqui

function validateItem(item, validation) {
  //Função que valida os campos
  if (item.required) {
    //Se o item for obrigatório
    if (item.value !== "") {
      //Testa se está preenchido
    } else {
      //No caso do campo não ser preenchido o aviso é de que o campo é obrigatório
      if ($(`#${item.id}`).nextElementSibling === null) {
        item.insertAdjacentHTML(
          "afterend",
          `<p class='warning'>Campo ${item.name} obrigatório</p>`
        );
      }
      return false;
    }
  }
  if (validation.val) {
    //Faz a validação dinamica do campo
    return true;
  } else {
    //Caso falhar na validação dinâmica, passa a exibir a mensagem específica daquele campo
    //Tratamento dos demais inputs
    if ($(`#${item.id}`).nextElementSibling === null) {
      item.insertAdjacentHTML(
        "afterend",
        `<p class='warning'>${validation.warning}</p>`
      );
    }
    item.focus();
    return false;
  }
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

function correcaoDoDado(params) {
  // É chamado toda vez que um campo é alterado no HTML
  if ($(`#${params}`).nextElementSibling !== null) {
    $(`#${params}`).nextElementSibling.remove(); //Após a mudança no campo remove esse aviso
  }
}
