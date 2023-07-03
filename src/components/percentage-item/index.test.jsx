import React from 'react';
import { render, cleanup } from '@testing-library/react';
import PercentageItem from '.';

afterEach(cleanup);

describe('PercentageItem', () => {
  test('should render the percentage value and subheading when provided', () => {
    const value = 75;
    const text = 'Upload Success';

    const { getByText } = render(<PercentageItem value={value} text={text} />);

    const valueElement = getByText('75%');
    const textElement = getByText('Upload Success');

    expect(valueElement).toBeInTheDocument();
    expect(textElement).toBeInTheDocument();
  });

  test('should render only the percentage value when subheading is not provided', () => {
    const value = 50;

    const { getByText, queryByText } = render(<PercentageItem value={value} />);

    const valueElement = getByText('50%');
    const textElement = queryByText('Lines Saved');

    expect(valueElement).toBeInTheDocument();
    expect(textElement).toBeNull();
  });
});