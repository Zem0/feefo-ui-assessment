import React from 'react';
import styled from 'styled-components';

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

const SubHeading = styled.h4`
    color: hsla(360, 2%, 60%, 1.0);
`;

export const PercentageItem = ({value, subHeading}) => {
    return (
        <Wrapper>
            <Value>{value}<PercentSymbol>%</PercentSymbol></Value>
            <SubHeading>{subHeading}</SubHeading>
        </Wrapper>
    );
}

export default PercentageItem;