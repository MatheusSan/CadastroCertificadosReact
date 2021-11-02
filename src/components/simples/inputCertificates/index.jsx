import React, { useContext } from "react";
import styled from "styled-components";
import { FaHeart, FaRegHeart } from "react-icons/fa";

import Colors from "../../../assets/Colors";
import { ValidationsContext } from "../../../contexts/ValidationsProvider";

const FormBox = styled.div`
  margin: 30px 0;
  width: ${props => props.width ? props.width : "100%"};
`;
const Input = styled.input`
  font-size: 16px;
  color: ${Colors.grayDarkText};
  border: 2px solid ${Colors.grayDark};
  border-radius: 4px;
  width: 100%;
  height: 40px;
  padding-left: 10px;
  padding-right: 40px;
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
const DivInput = styled.div`
  display: flex;
  flex-flow: row-reverse;
  align-items: center;
`;
const ButtonHeart = styled.button`
  background-color: transparent;
  border: none;
  height: 35px;
  margin-right: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  position: absolute;
`;

export default function InputMy({
  text,
  type,
  name,
  placeHolder,
  required,
  id,
  onChange,
  value,
  validation,
  width,
  fav,
  onFavorite
}) {
  const { erros } = useContext(ValidationsContext);

  return (
    <FormBox width={width}>
      <Texto>{text}</Texto>
      <DivInput>
        <Input
          id={id}
          type={type}
          name={name}
          placeholder={placeHolder}
          value={value}
          onChange={onChange}
          required={required}
          onBlur={validation}
        />
        <ButtonHeart onClick={onFavorite} type="button">
          {fav ? (
            <FaHeart size={25}/>            
            ) : (
            <FaRegHeart size={25}/>
          )}
        </ButtonHeart>
      </DivInput>
      {erros[id] !== "" && (
        <Aviso>{erros[id]}</Aviso>
      )}
    </FormBox>
  );
}
