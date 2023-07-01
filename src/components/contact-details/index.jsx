import React from 'react';
import styled from 'styled-components';
import { SubHeading } from '../sub-heading';
import { SquareAvatar } from '../square-avatar';
import { PersonDetails } from '../person-details';

const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
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