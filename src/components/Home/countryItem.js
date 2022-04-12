import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import { AiOutlineRightCircle } from 'react-icons/ai';

const ItemsCard = ({ id, country, totallConfirmed }) => (
  <Link className="countries" to={`details/${id}`} key={id}>
    <div className="country display">
      <h2 className="ea-country">{country}</h2>
      <div className="">
        <AiOutlineRightCircle />
        {totallConfirmed}
      </div>
    </div>
  </Link>
);

ItemsCard.propTypes = {
  id: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
};

export default ItemsCard;
