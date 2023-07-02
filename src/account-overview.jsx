import React from 'react';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

import { DetailHolder } from './components/detail-holder';
import { DetailHeader } from './components/detail-header';
import DetailInnerRow from './components/detail-inner-row';
import DetailInnerColumn from './components/detail-inner-column';
import { HorizontalSplitter } from './components/horizontal-splitter';
import VerticalSplitter from './components/vertical-splitter';
import PercentageItem from './components/percentage-item';
import TitleHolder from './components/title-holder';
import SectionTitle from './components/section-title';
import { ContactDetails } from './components/contact-details';

import './account-overview.css';

export const AccountOverview = ({data}) => {
  console.log(data);

  const uploads = data.salesOverview.uploads;
  const successfulUploads = data.salesOverview.successfulUploads;
  const linesAdded = data.salesOverview.linesSaved;
  const linesAttempted = data.salesOverview.linesAttempted;
  const supportContact = data.supportContact.name;
  const supportContactEmail = data.supportContact.email;
  const supportContactTelephone = data.supportContact.telephone;

  const UploadSummaryText = styled.p`
    text-align: left;
  `

  return (
    <main className='AccountOverview' aria-describedby='An overview of the account showing sales data'>
        <TitleHolder>
          <SectionTitle text='Account Overview' />
          <ContactDetails title={'your feefo support contact'.toUpperCase()} name={supportContact} telephone={supportContactTelephone} email={supportContactEmail}/>
        </TitleHolder>
        <DetailHolder>
          <DetailInnerColumn>
            <DetailHeader heading='Sales' headingIcon={faUpload}/>
            <UploadSummaryText>You have <b>{uploads} uploads</b> and <b>{linesAdded}</b> lines added.</UploadSummaryText>
          </DetailInnerColumn>
          <HorizontalSplitter />
          <DetailInnerRow>
            <PercentageItem value={successfulUploads * 100 / uploads} text={'upload success'.toUpperCase()}/>
            <VerticalSplitter />
            <PercentageItem value={linesAdded * 100 / linesAttempted} text={'lines saved'.toUpperCase()}/>
          </DetailInnerRow>
        </DetailHolder>
    </main>
  );
}

export default AccountOverview;