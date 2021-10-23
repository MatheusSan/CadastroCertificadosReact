import React from 'react';
import styled from 'styled-components';

import FormBasic from '../formBasic';
import Tabs from '../tabs';

const Background = styled.div`
  box-sizing: border-box;
  background-color: #eceef2;
  width: 100%;
  min-height: 100vh;
  padding: 50px 0;
`;
const Fundo = styled.div`
  max-width: 70%;
  min-height: calc(80vh - 46px);
  width: 100%;
  height: 100%;
  background-color: #FFF;
  margin: auto;
  border-radius: 20px;
  padding: 45px;
`;
const Text = styled.h2`
  font-size: 24px;
  font-family: Inter;
  font-weight: 600;
  margin: 0;
`;

function Panel() {
  return (
    <Background>
      <Fundo>
        <Text>Team Sign Up</Text>
        <Tabs/>
        <FormBasic/>
      </Fundo>
    </Background>
  );
}

export default Panel;