import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleReserve } from '../redux/rockets/RocketsSlice';
import '../css/rocketprofile.css';

const ProfileRocket = () => {
  const rockets = useSelector((state) => state.rockets.rockets);
  const reservedRockets = rockets.filter((rocket) => rocket.reserve === true);
  const dispatch = useDispatch();

  const handleToggleReserve = (rocketId) => {
    dispatch(toggleReserve(rocketId));
  };

  return (
    <div className="reserved-rockets">
      {reservedRockets.length < 1 ? (
        <h3>Currently No Rockets Reserved</h3>
      ) : (
        <ul>
          {reservedRockets.map((rocket) => (
            <li key={rocket.id}>
              <h3>{rocket.name}</h3>
              <button
                onClick={() => handleToggleReserve(rocket.id)}
                className="cancel-reservation"
                type="button"
              >
                Cancel Reservation
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProfileRocket;
