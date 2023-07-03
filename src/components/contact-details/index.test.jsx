import React from 'react';
import { render, cleanup } from '@testing-library/react';
import ContactDetails from '.';

afterEach(cleanup);

describe('ContactDetails', () => {
  test('should render the contact details correctly', () => {
    const title = 'Your Feefo support contact';
    const name = 'Tony Stark';
    const telephone = '1234567890';
    const email = 'tony@starkindustries.com';

    const { getByText } = render(
      <ContactDetails title={title} name={name} telephone={telephone} email={email} />
    );

    const titleElement = getByText('Your Feefo support contact');
    const nameElement = getByText('Tony Stark');
    const telephoneElement = getByText('1234567890');
    const emailElement = getByText('tony@starkindustries.com');

    expect(titleElement).toBeInTheDocument();
    expect(nameElement).toBeInTheDocument();
    expect(telephoneElement).toBeInTheDocument();
    expect(emailElement).toBeInTheDocument();
  });
});