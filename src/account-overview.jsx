import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHardHat } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

import { DetailHolder } from './components/detail-holder';

import './account-overview.css';

export const AccountOverview = ({data}) => {
  console.log(data);

  return (
    <div className="AccountOverview">
      <div>
        <FontAwesomeIcon icon={faHardHat} />
        Build your components here
      </div>
      <div>
        <DetailHolder>
          Sales details go here
        </DetailHolder>
      </div>
    </div>
  )
}

export default AccountOverview;