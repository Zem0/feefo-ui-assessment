import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const ColumnWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const Name = styled.span`
    color: hsla(0,0%,20%,1.0);
`;

const ContactInfoWrapper = styled.div`
    display: flex;
    flex-direction: row;
`;

export const PersonDetails = ({name, email, telephone}) => {
    return (
        <ColumnWrapper>
            <Name>{name}</Name>
            <ContactInfoWrapper>
                <span>
                    <FontAwesomeIcon icon={faEnvelope}/>
                    {email}
                </span>
                <span>{telephone}</span>
            </ContactInfoWrapper>
        </ColumnWrapper>
    );
}