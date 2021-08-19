import { render, screen } from '@testing-library/react';
import { Header } from 'Components/Table';

const aggGroups = ['2021-08-01T05:00:00Z', '2021-08-02T05:00:00Z'];

test('renders the header columns', () => {
  render(<Header aggregateGroupings={aggGroups} />);
  const element = screen.getByText(/Aug 1/i);
  expect(element).toBeInTheDocument();
});
