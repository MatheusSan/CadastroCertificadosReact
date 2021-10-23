import React, { useContext } from "react";
import styled from "styled-components";

import Colors from "../../../assets/Colors";
import { ValidationsContext } from "../../../contexts/ValidationsProvider";

const FormBox = styled.div`
  margin: 30px 0;
`;
const Input = styled.input`
  font-size: 16px;
  color: ${Colors.grayDarkText};
  border: 2px solid ${Colors.grayDark};
  border-radius: 4px;
  width: 100%;
  height: 40px;
  padding-left: 10px;
`;
const Texto = styled.p`
  font-size: 14px;
  color: ${Colors.grayDarkText};
`;
const Aviso = styled.p`
  font-size: 12px;
  color: ${Colors.alert};
  position: absolute;
`;

export default function InputMy({
  texto,
  type,
  name,
  placeHolder,
  required,
  id,
  onChange,
  readonly,
  value,
  validation,
}) {
  const { erros } = useContext(ValidationsContext);

  return (
    <FormBox>
      <Texto>{texto}</Texto>
      <Input
        id={id}
        type={type}
        name={name}
        placeholder={placeHolder}
        value={value}
        onChange={onChange}
        required={required}
        readOnly={readonly}
        onBlur={validation}
      />
      {erros[name] !== "" && (
        <Aviso>{erros[name]}</Aviso>
      )}
    </FormBox>
  );
}
