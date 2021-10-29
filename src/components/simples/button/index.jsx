import React from 'react';
import styled from 'styled-components';

import Colors from '../../../assets/Colors';

const FormBox = styled.div`
  margin: 30px 0;
  display: flex;
  flex-flow: row-reverse;
`;
const Button = styled.button`
  display: flex;
  align-items: center;
  font-size: 16px;
  background-color: ${Colors.primary};
  border: none;
  color: ${Colors.white};
  border-radius: 4px;
  padding: 10px;
  &:active {
    background-color: ${Colors.primaryDark};
  }
`;

export default function InputMy({ texto, nome, tipo, id, onClick }) {
  return (
    <FormBox>
      <Button id={id} type={tipo} name={nome} onClick={onClick}>
        {texto}
      </Button>
    </FormBox>
  );
}
