import React from 'react';
import {
  render, screen, fireEvent, waitFor,
} from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Rockets from '../components/Rockets';

const mockStore = configureStore([]);
const initialState = {
  rockets: {
    rockets: [
      {
        id: 1,
        name: 'Rocket 1',
        description: 'Description of Rocket 1',
        reserve: false,
        flickr_images: ['rocket1.jpg'],
      },
      {
        id: 2,
        name: 'Rocket 2',
        description: 'Description of Rocket 2',
        reserve: true,
        flickr_images: ['rocket2.jpg'],
      },
    ],
    statusFetch: 'succeeded',
    error: 'Sample error message',
  },
};

let store;

beforeEach(() => {
  store = mockStore(initialState);
  render(
    <Provider store={store}>
      <Rockets />
    </Provider>,
  );
});

test('renders rockets', () => {
  const rocket1 = screen.getByText('Rocket 1');
  const rocket2 = screen.getByText('Rocket 2');
  expect(rocket1).toBeInTheDocument();
  expect(rocket2).toBeInTheDocument();
});

test('toggles reservation when button is clicked', async () => {
  const cancelButton = screen.getByText('Cancel Reservation');
  expect(cancelButton).toBeInTheDocument();

  fireEvent.click(cancelButton);

  await waitFor(() => {
    const reserveButton = screen.getByText('Reserve Rocket');
    expect(reserveButton).toBeInTheDocument();
  });
});
