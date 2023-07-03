import React from 'react';
import { render, cleanup } from '@testing-library/react';
import SubHeading from '.';

afterEach(cleanup);

describe('SubHeading', () => {
  test('should render the subheading text', () => {
    const text = 'This is a subheading';

    const { getByText } = render(
      <SubHeading text={text} />
    );

    const textElement = getByText(text);

    expect(textElement).toBeInTheDocument();
  });
});