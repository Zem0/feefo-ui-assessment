import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { SubHeading } from '../sub-heading';
import { SquareAvatar } from '../square-avatar';
import { PersonDetails } from '../person-details';

/**
 * Represents a group of contact details.
 * @function ContactDetails
 * @returns a component with a small title and an avatar underneath, as well as the name and contact details provided.
 * @param {string} title - the title of the element eg 'Your Feefo support contact'.
 * @param {string} name - the contacts name - full name preferred.
 * @param {string} telephone - the contacts telephone number.
 * @param {string} email - the contacts email address.
 * **/

const ColumnWrapper = styled.article`
  gap: 1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const RowWrapper = styled.div`
  gap: 1.6rem;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ContactDetails = (props) => {
  return (
      <ColumnWrapper>
        <SubHeading text={props.title}/>
        <RowWrapper>
          <SquareAvatar initial={props.name}/>
          <PersonDetails name={props.name} telephone={props.telephone} email={props.email}/>
        </RowWrapper>
      </ColumnWrapper>
    );
}

ContactDetails.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  telephone: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired
};

export default ContactDetails;