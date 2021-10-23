import React from 'react';
import styled from 'styled-components';

const FormBox = styled.div`
  margin: 30px 0;
`;
const Select = styled.select`
  font-size: 16px;
  color: #767676;
  border: 2px solid #aaaaaa;
  border-radius: 4px;
  width: 100%;
  height: 40px;
  padding-left: 10px;
`;
const Texto = styled.p`
  font-size: 14px;
  color: #767676;
`;

export default function SelectMy({texto, tipo, nome, placeHolder, required, id, onChange, options}) {

  return (
    <FormBox>
      <Texto>{texto}</Texto>
      <Select id={id} type={tipo} name={nome} placeholder={placeHolder} onChange={onChange} required={required}>
        <option value="">{nome}</option>
        {options.map((e, i)=>{
          return <option value={e} key={i}>{e}</option>
        })}
      </Select>
    </FormBox>
  );
}
