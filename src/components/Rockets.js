import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRockets } from '../redux/rockets/RocketsSlice';
import '../css/rockets.css';

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
          <li className="rockets-wrapper" key={rocket.id}>
            <img className="rockts-image" src={rocket.images[0]} alt={rocket.name} />
            <div>
              <h3>{rocket.name}</h3>
              <p>{rocket.description}</p>

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
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Rockets;
