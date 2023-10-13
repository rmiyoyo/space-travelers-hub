import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store'; // Redux mock store
import ProfileRocket from '../pages/MyRockets'; // Adjust the path as needed

const mockStore = configureStore([]);
const initialState = {
  rockets: {
    rockets: [
      {
        id: 1,
        name: 'Rocket 1',
        reserve: true,
      },
      {
        id: 2,
        name: 'Rocket 2',
        reserve: false,
      },
    ],
  },
};

let store;

beforeEach(() => {
  store = mockStore(initialState);
  render(
    <Provider store={store}>
      <ProfileRocket />
    </Provider>,
  );
});

test('renders reserved rockets', () => {
  const reservedRocket = screen.getByText('Rocket 1');
  expect(reservedRocket).toBeInTheDocument();
});

test('cancels reservation when button is clicked', () => {
  const cancelButton = screen.getByText('Cancel Reservation');
  fireEvent.click(cancelButton);
});
