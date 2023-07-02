import React from 'react';
import styled from 'styled-components';

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