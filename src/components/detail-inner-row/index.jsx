import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 100%;
    display: inline-flex;
`;

export const DetailInnerRow = ({ children }) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  );
}

export default DetailInnerRow;