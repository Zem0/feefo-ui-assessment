import React from 'react';
import styled from 'styled-components';
import { SubHeading } from '../sub-heading';
import { SquareAvatar } from '../square-avatar';
import { PersonDetails } from '../person-details';

const ColumnWrapper = styled.div`
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

export const ContactDetails = ({title, name, telephone, email}) => {
  return (
      <ColumnWrapper>
        <SubHeading text={title}/>
        <RowWrapper>
          <SquareAvatar initial={name}/>
          <PersonDetails name={name} telephone={telephone} email={email}/>
        </RowWrapper>
      </ColumnWrapper>
    );
}

export default ContactDetails;