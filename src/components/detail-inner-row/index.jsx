import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

/**
 * @function DetailInnerRow
 * @returns returns a transparent element to be used within a DetailHolder to hold it's children in a flex row structure (children will be rendered one next to the other).
 * @param {Node} children - the content or elements you want to show in this holder.
 * **/

const Wrapper = styled.div`
    width: 100%;
    display: inline-flex;
`;

export const DetailInnerRow = (props) => {
  return (
    <Wrapper>
      {props.children}
    </Wrapper>
  );
}

DetailInnerRow.propTypes = {
  children: PropTypes.node
};

export default DetailInnerRow;