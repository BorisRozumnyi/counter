import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from './Button';

export const Counter: React.FC = () => {
  const [counter, setCounter] = useState(0);
  const handleIncremnt = () => {
    console.log('incremnt')
    setCounter(counter + 1)
  }
  const handleDecremnt = () => {
    console.log('decremnt')
    setCounter(counter - 1)
  }
  return (
    <Wrapper>
      <Button handleClick={handleDecremnt} text='-' />
      <span>{counter}</span>
      <Button handleClick={handleIncremnt} text='+' />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  color: #63abb7;
  font-weight: bold;
  border-radius: 3px;
  border: 2px solid #63abb7;
  padding: 1rem 3rem;
  margin: 0.5rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
