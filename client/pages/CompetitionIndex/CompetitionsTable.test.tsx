import { render, screen } from '@testing-library/react';
import CompetitionsTable from './CompetitionsTable';

const testCompetitions = [
  {
    id: 2166,
    name: 'AFC Champions League',
    type: 'CUP',
    region: 'Africa'
  }
]

test('displays full index page', () => {
  render(<CompetitionsTable competitions={testCompetitions} />)
  expect(screen.getByRole('table')).toBeInTheDocument();
});