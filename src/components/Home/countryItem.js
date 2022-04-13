/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineRightCircle } from 'react-icons/ai';

const ItemsCard = ({ id, country, totallConfirmed }) => (
  <Link className="countries" to={`details/${id}`} key={id}>
    <div className="country display">
      <h2 className="ea-country">{country.Country}</h2>
      <AiOutlineRightCircle />

    </div>
    {totallConfirmed}
  </Link>
);

export default ItemsCard;
