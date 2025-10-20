import { render, screen } from '@testing-library/react';
import CompetitionsIndex from './CompetitionsIndex';
import { act } from 'react';

beforeAll(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({ json: () => Promise.resolve({
      competitions: [
        {
          id: 1,
          name: 'Premier League',
          type: 'LEAGUE',
          area: {
            name: 'England'
          }
        },
        {
          id: 2,
          name: 'La Liga',
          type: 'LEAGUE',
          area: {
            name: 'Spain'
          }
        },
        {
          id: 3,
          name: 'Eredivisie',
          type: 'LEAGUE',
          area: {
            name: 'Netherlands'
          }
        }
      ]
    }) })
  ) as jest.Mock;
});

test('displays full index page', async () => {
  await act( async () => render(<CompetitionsIndex/>));
  expect(screen.getByRole('heading')).toBeInTheDocument();
  expect(screen.getByRole('description')).toBeInTheDocument();
  expect(screen.getByRole('table')).toBeInTheDocument();
});