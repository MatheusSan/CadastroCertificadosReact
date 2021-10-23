import React from 'react';
import styled from 'styled-components';

const FormBox = styled.div`
  margin: 30px 0;
  display: flex;
  align-items: center;
`;
const Checkbox = styled.input`
  font-size: 16px;
  color: #767676;
  border: 2px solid #aaaaaa;
  border-radius: 4px;
  margin-right: 8px;
  padding-left: 10px;
`;
const Texto = styled.label`
  font-size: 14px;
  color: #767676;
`;

export default function InputMy({texto, nome, id}) {

  return (
    <FormBox>
      <Checkbox id={id} type="checkbox" name={nome} />
      <Texto htmlFor={id}>{texto}</Texto>
    </FormBox>
  );
}
