import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHardHat, faUpload } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

import { DetailHolder } from './components/detail-holder';
import { DetailHeader } from './components/detail-header';

import './account-overview.css';

export const AccountOverview = ({data}) => {
  console.log(data);

  return (
    <section className="AccountOverview">
      <div>
        <FontAwesomeIcon icon={faHardHat} />
        Build your components here
      </div>
      <div>
        <DetailHolder>
          <DetailHeader heading='Sales' headingIcon={faUpload}/>
          Sales details go here
        </DetailHolder>
      </div>
    </section>
  )
}

export default AccountOverview;