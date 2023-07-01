import React from 'react';
import styled from 'styled-components';

const Spacer = styled.div`
    height: .2rem;
    width: 100%;
    background-color: hsla(0, 0%, 92%, 1.0);
`;

export const HorizontalSplitter = () => {
    return (
        <Spacer />
    );
}

export default HorizontalSplitter;