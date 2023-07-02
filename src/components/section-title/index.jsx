import React from 'react';
import styled from 'styled-components';

/**
 * @function SectionTitle
 * @returns returns a component with a string for a section title.
 * **/

const Title  = styled.h2`
  font-size: 3rem;
  font-weight: 100;
  color: hsla(0,0%,20%,1.0);
`;

export const SectionTitle = ({text}) => {
  return (
    <Title>
      {text}
    </Title>
  );
}

export default SectionTitle;