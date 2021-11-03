import React, { useContext } from 'react';
import styled from 'styled-components';

import { StateFormContext } from '../../../contexts/StateFormProvider';
import { InfosContext } from "../../../contexts/InfosProvider";
import FormBasic from '../formBasic';
import FormSocial from '../formSocial';
import FormCertificates from '../formCertificates';
import PopupFinish from "../popupFinish";
import Tabs from '../tabs';

const Background = styled.div`
  box-sizing: border-box;
  background-color: #eceef2;
  width: 100%;
  min-height: 100vh;
  padding: 50px 0;
  @media(max-width: 650px) {
    padding: 0;
  }
`;
const Fundo = styled.div`
  max-width: 70%;
  min-height: calc(80vh - 46px);
  background-color: #FFF;
  margin: auto;
  border-radius: 20px;
  padding: 45px;
  @media(max-width: 650px) {
    min-width: 100%;
    padding: 15px;
  }
  @media(min-width: 1440px) {
    min-height: auto;
  }
`;
const Text = styled.h2`
  font-size: 24px;
  font-family: Inter;
  font-weight: 600;
  margin: 0;
`;

function Panel() {
  const { stateForm, nextStateForm, finish, setFinish } = useContext(StateFormContext);
  const { cleanForms } = useContext(InfosContext);

  return (
    <Background>
      <Fundo>
        <Text>Team Sign Up</Text>
        <Tabs/>
        {stateForm === 0 ? (
          <FormBasic/>
        ) :
        stateForm === 1 ? (
          <FormSocial/>
        ) : (
          <FormCertificates/>
        )}
      </Fundo>
      {finish && <PopupFinish onClick={() => [nextStateForm(), setFinish(false), cleanForms()]}/>}
    </Background>
  );
}

export default Panel;