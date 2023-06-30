import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
    border-radius: .4rem;
    background-color: hsla(0, 0%, 100%, 1.0);
`;

export const DetailHolder = ({children}) => {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    );
}

