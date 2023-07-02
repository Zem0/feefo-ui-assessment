import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

/**
 * Represents a large title for a section
 * @function SectionTitle
 * @returns returns a component with a string for a section title.
 * @param {string} text - The title of the section.
 * **/

const Title  = styled.h2`
  font-size: 3rem;
  font-weight: 100;
  color: hsla(0,0%,20%,1.0);
`;

export const SectionTitle = (props) => {
  return (
    <Title>
      {props.text}
    </Title>
  );
}

SectionTitle.propTypes = {
  text: PropTypes.string
};

export default SectionTitle;