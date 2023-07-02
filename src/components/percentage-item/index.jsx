import React from 'react';
import styled from 'styled-components';
import { SubHeading } from '../sub-heading';

const Wrapper = styled.div`
    display: flex;
    flex: 1 1 0px;
    flex-direction: column;
    align-items: flex-start;
    padding: 1.5rem;
`;

const Value = styled.span`
    font-size: 3rem;
    font-style: bold;
    font-weight: 600;
    color: hsla(143, 68%, 40%, 1.0);
`;

export const PercentageItem = ({value, text}) => {
    return (
        <Wrapper>
            <Value>{value}%</Value>
            { text &&
                <SubHeading text={text} />
            }
        </Wrapper>
    );
}

export default PercentageItem;