import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRockets } from '../reduxFeatures/RocketsSlice';

function Rockets() {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets.rockets);

  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);

  const handleReserveRocket = () => {
    // reserve a rocket here (dispatch an action)
  };

  const handleCancelReservation = () => {
    // reservation here (dispatch an action)
  };

  return (
    <div>
      <h2>Rockets</h2>
      <ul>
        {rockets.map((rocket) => (
          <li key={rocket.id}>
            <h3>{rocket.name}</h3>
            <p>{rocket.description}</p>
            <img src={rocket.images[0]} alt={rocket.name} />

            {rocket.reserved ? (
              <>
                <span>Reserved</span>
                <button type="button" onClick={() => handleCancelReservation(rocket.id)}>
                  Cancel reservation
                </button>
              </>
            ) : (
              <button type="button" onClick={() => handleReserveRocket(rocket.id)}>
                Reserve rocket
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Rockets;
