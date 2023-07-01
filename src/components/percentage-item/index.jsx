import React from 'react';
import styled from 'styled-components';
import { SubHeading } from '../sub-heading';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const Value = styled.span`
    font-size: 3rem;
    font-style: bold;
    font-weight: 600;
    color: hsla(143, 68%, 40%, 1.0);
`;

const PercentSymbol = styled.span`
    font-weight: normal;
`;

export const PercentageItem = ({value, text}) => {
    return (
        <Wrapper>
            <Value>{value}<PercentSymbol>%</PercentSymbol></Value>
            { text &&
                <SubHeading text={text} />
            }
        </Wrapper>
    );
}

export default PercentageItem;