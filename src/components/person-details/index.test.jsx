import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { PersonDetails } from '.';

afterEach(cleanup);

describe('PersonDetails', () => {
  test('should render the person details correctly', () => {
    const name = 'Barry Allen';
    const email = 'barry@starlabs.com';
    const telephone = '01678171617';

    const { getByText, getByLabelText } = render(
      <PersonDetails name={name} email={email} telephone={telephone} />
    );

    const nameElement = getByText(name);
    const emailElement = getByText(email);
    const telephoneElement = getByText(telephone);
    const emailLink = getByLabelText(`Send an email to :${email}`);

    expect(nameElement).toBeInTheDocument();
    expect(emailElement).toBeInTheDocument();
    expect(telephoneElement).toBeInTheDocument();
    expect(emailLink.href).toEqual(`mailto:${email}`);
  });
});