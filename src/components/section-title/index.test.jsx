import React from 'react';
import { render, cleanup } from '@testing-library/react';
import SectionTitle from '.';

afterEach(cleanup);

describe('SectionTitle', () => {
  test('should render the section title correctly', () => {
    const titleText = 'Sample Section Title';

    const { getByText } = render(
      <SectionTitle text={titleText} />
    );

    const titleElement = getByText(titleText);

    expect(titleElement).toBeInTheDocument();
  });
});