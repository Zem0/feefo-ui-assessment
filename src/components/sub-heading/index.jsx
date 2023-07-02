import React from 'react';
import styled from 'styled-components';

/**
 * @function SubHeading
 * @returns returns an h4 tag with some grey text to be used as a subheading
 * **/

const Heading = styled.h4`
    color: hsla(360, 2%, 60%, 1.0);
    font-size: 1.3rem;
    text-align: left;
`;

export const SubHeading = ({text}) => {
  return (
      <Heading>{text}</Heading>
    );
}