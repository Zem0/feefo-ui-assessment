import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHardHat, faUpload } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

import { DetailHolder } from './components/detail-holder';
import { DetailHeader } from './components/detail-header';
import DetailInnerRow from './components/detail-inner-row';
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

  return (
    <section className="AccountOverview">

      <div>
        <TitleHolder>
          <SectionTitle text='Account Overview' />
          <ContactDetails title={'your feefo support contact'.toUpperCase()} name={supportContact} telephone={supportContactTelephone} email={supportContactEmail}/>
        </TitleHolder>
        <DetailHolder>
          <DetailHeader heading='Sales' headingIcon={faUpload}/>
          <p>You have {uploads} uploads and {linesAdded} lines added.</p>
          <HorizontalSplitter />
          <DetailInnerRow>
            <PercentageItem value={successfulUploads * 100 / uploads} text={'upload success'.toUpperCase()}/>
            <VerticalSplitter />
            <PercentageItem value={linesAdded * 100 / linesAttempted} text={'lines saved'.toUpperCase()}/>
          </DetailInnerRow>
        </DetailHolder>
      </div>
    </section>
  );
}

export default AccountOverview;