import React from 'react';
import styled from 'styled-components';

/**
 * Represents a grey vertical line to separate content within a section
 * @function VerticalSplitter
 * @returns returns a div styled to look like a grey separating line.
 * **/

const Spacer = styled.div`
    width: .1rem;
    background-color: hsla(0, 0%, 92%, 1.0);
`;

export const VerticalSplitter = () => {
    return (
        <Spacer />
    );
}

export default VerticalSplitter;