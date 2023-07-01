import React from 'react';
import styled from 'styled-components';

/**
 * @function TitleHolder
 * @returns returns a transparent container for placing a section title and other component along a horizontal axis.
 * **/

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
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