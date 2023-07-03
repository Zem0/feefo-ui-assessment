import React from 'react';
import { render, cleanup } from '@testing-library/react';
import TitleHolder from '.';

afterEach(cleanup);

describe('TitleHolder', () => {
  test('should render its children', () => {
    const children = <div>Child Component</div>;

    const { getByText } = render(
      <TitleHolder>{children}</TitleHolder>
    );

    const childComponent = getByText('Child Component');

    expect(childComponent).toBeInTheDocument();
  });
});