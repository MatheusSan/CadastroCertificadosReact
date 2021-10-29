import React, { useContext } from "react";
import styled from "styled-components";

import Colors from "../../../assets/Colors";
import { ValidationsContext } from "../../../contexts/ValidationsProvider";

const FormBox = styled.div`
  margin: 30px 0;
  display: flex;
  align-items: center;
`;
const Checkbox = styled.input`
  font-size: 16px;
  transform: scale(1.2);
  color: ${Colors.grayDarkText};
  border: 2px solid ${Colors.grayDark};
  border-radius: 4px;
  margin-right: 8px;
  padding-left: 10px;
`;
const Texto = styled.label`
  font-size: 16px;
  line-height: 18px;
  color: ${Colors.black};
`;
const Aviso = styled.p`
  font-size: 12px;
  color: ${Colors.alert};
  margin-top: 30px;
  position: absolute;
`;

export default function InputMy({ texto, value, name, id, onChange }) {
  const { erros } = useContext(ValidationsContext);

  return (
    <FormBox>
      <Checkbox checked={value} value={value} id={id} type="checkbox" name={name} onChange={onChange} />
      <Texto htmlFor={id}>{texto}</Texto>
      {erros[name] !== "" && (<Aviso>{erros[name]}</Aviso>)}
    </FormBox>
  );
}
