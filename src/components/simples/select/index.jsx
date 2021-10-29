import React from 'react';
import styled from 'styled-components';

const FormBox = styled.div`
  margin: 30px 0;
  width: ${props => props.width ? props.width : "100%"};
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

export default function SelectMy({text, tipo, name, required, id, onChange, options, width}) {

  return (
    <FormBox width={width}>
      <Texto>{text}</Texto>
      <Select id={id} type={tipo} name={name} onChange={onChange} required={required}>
        {options.map((e, i)=>{
          return <option value={e} key={i}>{e}</option>
        })}
      </Select>
    </FormBox>
  );
}
