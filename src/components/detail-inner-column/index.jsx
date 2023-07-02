import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

/**
 * @function DetailInnerColumn
 * @returns returns a transparent element to be used within a DetailHolder to hold it's children in a flex column structure (children will be rendered one above the other).
 * @param {Node} children - the content or elements you want to show in this holder.
 * **/

const Wrapper = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 1.5rem;
    align-items: flex-start;
    gap: 1.8rem;
`;

export const DetailInnerColumn = (props) => {
  return (
    <Wrapper>
      {props.children}
    </Wrapper>
  );
}

DetailInnerColumn.propTypes = {
  children: PropTypes.node
};

export default DetailInnerColumn;