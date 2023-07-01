import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

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
  color: hsla(360, 3%, 74%, 1.0);
`

const MainIcon = styled(FontAwesomeIcon)`
  font-size: 1.5rem;
  color: hsla(200, 81%, 58%, 1.0);
`;

export const DetailHeader = (props) => {
  return (
    <Wrapper>
      <MainIcon icon={props.headingIcon} />
      <Heading>{props.heading}</Heading>
      <HelpIcon icon={faInfoCircle} />
    </Wrapper>
  );
}

DetailHeader.propTypes = {
  heading: PropTypes.string.isRequired,
  headingIcon: PropTypes.object.isRequired,
};

export default DetailHeader;