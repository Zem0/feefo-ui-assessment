import React from 'react';
import { render, cleanup } from '@testing-library/react';
import DetailInnerRow from '.';

afterEach(cleanup);

describe('DetailInnerRow', () => {
  test('should render the children correctly', () => {
    const { getByText } = render(
      <DetailInnerRow>
        <div>Child Component 1</div>
        <div>Child Component 2</div>
      </DetailInnerRow>
    );

    const childComponent1 = getByText('Child Component 1');
    const childComponent2 = getByText('Child Component 2');

    expect(childComponent1).toBeInTheDocument();
    expect(childComponent2).toBeInTheDocument();
  });
});