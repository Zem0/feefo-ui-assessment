import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import DetailHeader from '.';

afterEach(cleanup);

describe('DetailHeader', () => {
  test('should render the detail header correctly', () => {
    const headingIcon = faGear;
    const heading = 'Sales';

    const { getByText, getByTestId, getByTitle } = render(
      <DetailHeader headingIcon={headingIcon} heading={heading} />
    );

    const headingIconElement = getByTitle('heading-icon');
    const headingElement = getByText('Sales');
    const helpIconElement = getByTestId('help-icon');

    expect(headingIconElement).toBeInTheDocument();
    expect(headingElement).toBeInTheDocument();
    expect(helpIconElement).toBeInTheDocument();
  });
});