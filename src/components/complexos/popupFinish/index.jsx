import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { FaTimes } from "react-icons/fa";

import Colors from "../../../assets/Colors";
import { InfosContext } from "../../../contexts/InfosProvider";

const Background = styled.div`
  box-sizing: border-box;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  padding: 50px 0;
`;
const Fundo = styled.div`
  max-width: 70%;
  min-height: 50vh;
  max-height: 100vh;
  background-color: ${Colors.primary};
  color: ${Colors.white};
  margin: auto;
  border-radius: 20px;
  padding: 45px;
  overflow: auto;
  @media (max-width: 650px) {
    min-width: 100%;
    max-height: 70vh;
    padding: 15px;
  }
  @media (min-width: 1440px) {
    min-width: 50%;
    min-height: auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding-top: 25px;
    padding-bottom: 0px;
  }
`;
const Title = styled.p`
  font-size: 22px;
  font-family: Inter;
  font-weight: 600;
  margin: 15px 0;
  text-decoration: underline;
`;
const Text = styled.p`
  font-size: 18px;
  font-family: Inter;
  font-weight: normal;
  margin-bottom: 8px;
`;
const ButtonClose = styled.button`
  background-color: transparent;
  border: none;
  float: right;
  cursor: pointer;
`;

function popupFinish({ onClick }) {
  const {
    name,
    nickname,
    email,
    phone,
    day,
    month,
    year,
    age,
    linkedin,
    github,
    certificates,
    teamName,
    institution,
    graduation,
  } = useContext(InfosContext);
  const [certificatesOrdered, setCertificatesOrdered] = useState([]);
  const [formatedDate, setFormatedDate] = useState([]);
  const [haveCertificates, setHaveCertificates] = useState(false);

  function formatDate() {
    setFormatedDate(`${month} ${day}, ${year} - ${age} years old`);
  }
  function certificatesOrderedFav() {
    let arrAux = [];
    certificates.forEach((value) => {
      if (value.text !== "") {
        setHaveCertificates(true);
      }
      if (value.fav) {
        arrAux.unshift(value);
      } else {
        arrAux.push(value);
      }
    });
    setCertificatesOrdered(arrAux);
  }

  useEffect(() => {
    certificatesOrderedFav();
    formatDate();
  }, []);

  return (
    <Background>
      <Fundo>
        <ButtonClose onClick={onClick}>
          <FaTimes size={40} color={Colors.white} />
        </ButtonClose>
        <Title>Personal data</Title>
        <Text>{nickname === "" ? name : `${name} - ${nickname}`}</Text>
        <Text>Email: {email}</Text>
        {phone !== "" && <Text>Phone: {phone}</Text>}
        <Text>{formatedDate}</Text>
        <Title>Professional data</Title>
        {linkedin !== "" && <Text>Linkedin: {linkedin}</Text>}
        <Text>GitHub: {github}</Text>
        {haveCertificates &&
          (<Title>Certificates</Title>)(
            certificatesOrdered.map((value, index) => {
              return <Text key={index}>• {value.text}</Text>;
            })
          )}
        <Title>Academic data</Title>
        <Text>{teamName}</Text>
        <Text>Institution: {institution}</Text>
        <Text>Graduation: {graduation}</Text>
      </Fundo>
    </Background>
  );
}

export default popupFinish;
