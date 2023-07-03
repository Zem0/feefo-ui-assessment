import { render, screen } from '@testing-library/react';
import AccountOverview from './account-overview';

const data = {
  supportContact: {
    name: 'John Smith',
    email: 'john.smith@feefo.com',
    telephone: '020 3362 4208'
  },
  salesOverview: {
    uploads: 8,
    successfulUploads: 3,
    linesAttempted: 20,
    linesSaved: 4,
  }
}

test('renders account overview title', () => {
  render(<AccountOverview data={data} />);
  const element = screen.getByText(/Account Overview/i);
  expect(element).toBeInTheDocument();
});
