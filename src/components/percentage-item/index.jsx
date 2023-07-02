import React from 'react';
import styled from 'styled-components';
import { SubHeading } from '../sub-heading';
import PropTypes from 'prop-types';

/**
 * Represents a large percentage value with a subheading to be used in a dashboard type area.
 * @function PercentageItem
 * @returns returns a div holding two spans to show a percentage value with a subheading underneath describing the value above.
 * @param {number} value - the percentage value to be shown. NB this component does not calculate the percentage.
 * @param {string} text - the descriptive heading for the percentage shown.
 * **/

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

export const PercentageItem = (props) => {
    return (
        <Wrapper>
            <Value>{props.value}%</Value>
            { props.text &&
                <SubHeading text={props.text} />
            }
        </Wrapper>
    );
}

PercentageItem.propTypes = {
    value: PropTypes.number.isRequired,
    text: PropTypes.string,
};

export default PercentageItem;