import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

/**
 * Represents a short piece text as a small heading.
 * @function SubHeading
 * @returns returns an h4 tag with some grey text to be used as a subheading
 * @param text - the text to be shown in the subheading. Context will depend on where this component is rendered.
 * **/

const Text = styled.h4`
    color: hsla(360, 0.66%, 44.22%, 1.0);
    font-size: 1.3rem;
    text-align: left;
`;

export const SubHeading = (props) => {
  return (
      <Text>{props.text}</Text>
    );
}

SubHeading.propTypes = {
  text: PropTypes.string
};

export default SubHeading;