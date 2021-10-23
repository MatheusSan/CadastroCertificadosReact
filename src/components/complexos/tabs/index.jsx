import React, { useContext } from 'react';
import styled from 'styled-components';
import { StateFormContext } from '../../../contexts/StateFormProvider';

const Tabs = styled.div`
  display: flex;
  flex-flow: row;
  align-items: center;
  height: 48px;
  width: 100%;
  margin-top: 30px;
`;
const ChooseTabs = styled.div`
  height: 48px;
  width: 33.33%;
  display: flex;
  flex-flow: column;
  text-align: center;
  justify-content: center;
  font-size: 16px;
  font-family: Nunito;
  border-bottom: ${props => props.choose ? "solid 3px #074ee8" : "solid 2px #aaa"};
  cursor: pointer;
  color: ${props => props.choose ? "#074ee8" : "#000"};
`;

function Carousel() {
  const { stateForm, setStateManualy } = useContext(StateFormContext);

  return (
    <Tabs>
      <ChooseTabs choose={stateForm === 0 ? true : false} onClick={() => setStateManualy(0)}>Basic</ChooseTabs>
      <ChooseTabs  choose={stateForm === 1 ? true : false} onClick={() => setStateManualy(1)}>Social</ChooseTabs>
      <ChooseTabs  choose={stateForm === 2 ? true : false} onClick={() => setStateManualy(2)}>Certificates</ChooseTabs>
    </Tabs>
  );
}

export default Carousel;