import React from 'react';
import styled from 'styled-components';

/**
 * Represents a grey horizontal line to separate content within a section
 * @function HorizontalSplitter
 * @returns returns a div styled to look like a grey separating line.
 * **/

const Spacer = styled.hr`
    border-top: .1rem solid;
    border-left: 0;
    border-right: 0;
    border-bottom: 0;
    margin: 0;
    width: 100%;
    border-color: hsla(0, 0%, 92%, 1.0);
`;

export const HorizontalSplitter = () => {
    return (
        <Spacer />
    );
}

export default HorizontalSplitter;