import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

/**
 * Represents a small heading for a DetailHolder.
 * @function DetailHeader
 * @returns a component with a small fontawesome icon of the users choice on the left with a title to the right and a help icon on the far right hand side.
 * @param {string} headingIcon - the name of the fontawesome icon you want to show eg. 'faGear'.
 * @param {string} heading - the title of the Details you want to show eg. 'Sales'.
 * **/

const Wrapper = styled.div`
  display: inline-flex;
  align-items: center;
  width: 100%;
  gap: .8rem;
`;

const Heading = styled.h3`
  color: hsla(0, 0%, 20%, 1.0);
`;

const HelpIcon = styled(FontAwesomeIcon)`
  margin-left: auto;
  color: hsla(360, 0.66%, 44.22%, 1.0);
`

const MainIcon = styled(FontAwesomeIcon)`
  font-size: 1.5rem;
  color: hsla(200, 81%, 58%, 1.0);
`;

export const DetailHeader = (props) => {
  return (
    <Wrapper>
      <MainIcon data-testid='mainIcon' title='heading-icon' icon={props.headingIcon} />
      <Heading>{props.heading}</Heading>
      <HelpIcon data-testid='helpIcon' icon={faInfoCircle} />
    </Wrapper>
  );
}

DetailHeader.propTypes = {
  heading: PropTypes.string.isRequired,
  headingIcon: PropTypes.object.isRequired,
};

export default DetailHeader;