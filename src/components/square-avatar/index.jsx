import React from 'react';
import styled from 'styled-components';
import { showFirstLetter } from '../../helpers/strings';

const Square = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3.8rem;
  height: 3.8rem;
  border-radius: .4rem;
  aspect-ratio: 1 / 1;
  background-color: hsla(50, 95%, 50%, 1.0);
`;

const Letter = styled.span`
  font-size: 1.6rem;
  font-weight: 600;
  color: hsla(0,0%,20%,1.0);
`

export const SquareAvatar = ({initial}) => {
  return (
    <Square>
      <Letter>{showFirstLetter(initial)}</Letter>
    </Square>
  );
}