import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { showFirstLetter } from '../../helpers/strings';
import SquareAvatar from '.';

afterEach(cleanup);

jest.mock('../../helpers/strings', () => ({
  showFirstLetter: jest.fn()
}));

describe('SquareAvatar', () => {
  test('should render the square avatar with the initial', () => {
    const initial = 'A';

    showFirstLetter.mockReturnValue(initial);

    const { getByText } = render(
      <SquareAvatar initial={initial} />
    );

    const initialElement = getByText(initial);

    expect(initialElement).toBeInTheDocument();
  });
});