import React from 'react';
import styled from 'styled-components';

/**
 * @function DetailHolder
 * @returns returns a white card wrapper to use around details that need to be highlighted within a section of the app.
 * **/

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: .4rem;
  background-color: hsla(0, 0%, 100%, 1.0);
  box-shadow: 0 0 1.2rem hsla(0, 0%, 0%, .07);
`;

export const DetailHolder = ({children}) => {
  return (
    <Wrapper className='DetailHolder'>
      {children}
    </Wrapper>
  );
}

export default DetailHolder;

