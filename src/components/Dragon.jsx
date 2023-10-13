import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDragon, bookingCancelation, bookDragon } from '../redux/dragons/dragonsSlice';
import '../css/Dragons.css';

function Dragons({
  id, dragon, type, photo, description, booked,
}) {
  const dispatch = useDispatch();

  const makeBookings = () => {
    dispatch(bookDragon({ id }));
  };

  const handleCancel = () => {
    dispatch(bookingCancelation({ id }));
  };

  const reservedText = booked ? <span className="reserved">Reserved</span> : null;

  return (
    <article className="section-drgns" key={id}>
      <div className="photo-section">
        <img src={photo} className="photo-drgn" alt="dragon" />
      </div>
      <section className="details-container">
        <h2>{dragon}</h2>
        <p>{type}</p>
        <p className="text-wrapper">
          {reservedText}
          {description}
        </p>
        {booked ? (
          <button onClick={handleCancel} className="btn-cancel" type="button">
            Cancel Reservation
          </button>
        ) : (
          <button onClick={makeBookings} className="btn-book" type="button">
            Reserve Dragon
          </button>
        )}
      </section>
    </article>
  );
}

const DragonsCount = () => {
  const dragons = useSelector((state) => state.dragons.dragonStore);
  const countConst = dragons.filter((dragons) => dragons.reserved);

  const dispatch = useDispatch();
  useEffect(() => {
    if (dragons.length === 0) {
      dispatch(fetchDragon());
    }
  }, [dispatch, dragons]);

  return (
    <>
      {countConst.length === 0 ? (
        <h3 className="zero-reservations">No Reservations</h3>
      ) : (
        <div>
          {countConst.map((dragon) => (
            <h3 className="reservations" key={dragon.id}>{dragon.name}</h3>

          ))}
        </div>
      )}
    </>
  );
};

Dragons.propTypes = {
  id: PropTypes.string.isRequired,
  dragon: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  booked: PropTypes.bool.isRequired,
};

function Dragon() {
  const dragonsArr = useSelector((state) => state.dragons.dragonStore);
  const status = useSelector((state) => state.dragons.status);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === 'idle') dispatch(fetchDragon());
  }, [dispatch, status]);

  return (
    <main>
      {dragonsArr.map((dragon) => (
        <Dragons
          key={dragon.id}
          id={dragon.id}
          dragon={dragon.name}
          type={dragon.type}
          photo={dragon.flickr_images[0]}
          description={dragon.description}
          booked={dragon.reserved}
        />
      ))}
    </main>
  );
}

export { DragonsCount };
export default Dragon;
