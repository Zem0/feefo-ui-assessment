import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 1.5rem;
    align-items: flex-start;
    gap: 1.8rem;
`;

export const DetailInnerColumn = ({ children }) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  );
}

export default DetailInnerColumn;