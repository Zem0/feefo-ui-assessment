import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const ColumnWrapper = styled.div`
    gap: .4rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const Name = styled.span`
    color: hsla(0,0%,20%,1.0);
`;

const ContactInfoWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: .4rem
`;

const Email = styled.span`
    margin-inline-end: .6rem;
`;

const EnvelopeIcon = styled(FontAwesomeIcon)`
    margin-inline-end: .5rem
`;

export const PersonDetails = ({name, email, telephone}) => {
    return (
        <ColumnWrapper>
            <Name>{name}</Name>
            <ContactInfoWrapper>
                <Email>
                    <EnvelopeIcon icon={faEnvelope}/>
                    {email}
                </Email>
                <span>{telephone}</span>
            </ContactInfoWrapper>
        </ColumnWrapper>
    );
}