import React from 'react';
import styled from 'styled-components';
import { showFirstLetter } from '../../helpers/strings';
import PropTypes from 'prop-types';

/**
 * Represents a yellow square avatar showing a persons initial. person context will change depending on where this component is used.
 * @function SquareAvatar
 * @returns returns a div styled to look like a yellow square with rounded corners holding the first initial of the person in question.
 * @param {string} initial - the letter to be shown within the square.
 * **/

const Square = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 4rem;
  border-radius: .4rem;
  aspect-ratio: 1 / 1;
  background-color: hsla(50, 95%, 50%, 1.0);
`;

const Letter = styled.span`
  font-size: 1.6rem;
  font-weight: 600;
  color: hsla(0,0%,20%,1.0);
`

export const SquareAvatar = (props) => {
  return (
    <Square>
      <Letter>{showFirstLetter(props.initial)}</Letter>
    </Square>
  );
}

SquareAvatar.propTypes = {
  initial: PropTypes.string.isRequired
}

export default SquareAvatar;