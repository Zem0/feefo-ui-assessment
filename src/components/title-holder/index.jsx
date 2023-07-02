import React from 'react';
import styled from 'styled-components';

/**
 * @function TitleHolder
 * @returns returns a transparent container for placing a section title and other component along a horizontal axis.
 * **/

const Wrapper = styled.div`
  gap: 1.6rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  background-color: transparent;
`;

export const TitleHolder = ({ children }) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  );
}

export default TitleHolder;