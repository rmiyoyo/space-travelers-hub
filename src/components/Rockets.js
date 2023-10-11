import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRockets, toggleReserve } from '../redux/rockets/RocketsSlice';
import '../css/rockets.css';

const Rockets = () => {
  const dispatch = useDispatch();
  const {
    rockets, statusFetch, error,
  } = useSelector((state) => state.rockets);

  useEffect(() => {
    if (statusFetch === 'idle') {
      dispatch(fetchRockets());
    }
  }, [dispatch, statusFetch]);

  const handleToggleReserve = (rocketId) => {
    dispatch(toggleReserve(rocketId));
  };

  if (statusFetch === 'failed') {
    return (
      <div>
        Error:
        {error}
      </div>
    );
  }

  return (
    <main>
      {rockets.map((rocket) => {
        const {
          flickr_images: img, name, description, reserve, id,
        } = rocket;

        const reserved = reserve ? <span className="reserved">Reserved</span> : null;

        return (

          <article key={id}>
            <div className="rockets-container">
              <img className="rockets-images" src={img[0]} alt="Rocket" />
              <section>
                <h2 data-testid={id}>{name}</h2>
                <p className="text-wrapper">
                  {reserved}
                  {description}
                </p>
                <button
                  onClick={() => handleToggleReserve(id)}
                  className={reserve ? 'not-reserved' : 'reserve-rocket'}
                  type="button"
                >
                  {reserve ? 'Cancel Reservation' : 'Reserve Rocket'}
                </button>
              </section>
            </div>
          </article>
        );
      })}
    </main>
  );
};

export default Rockets;
