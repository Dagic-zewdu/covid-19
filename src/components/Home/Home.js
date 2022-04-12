/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import LandingImage from '../Layouts/LandingImage';
import Navbar from '../Layouts/Navbar';
import Spinner from '../Layouts/Spinner';
import ItemsCard from './countryItem';

const Home = () => {
  const [state, setState] = useState({
    index: '',
  });
  const { loading, error } = useSelector((state) => state);
  return (
    <>
      <Navbar />
      {
  loading
    ? <Spinner />
    : error
      ? <h1 className="text-center">{error}</h1>
      : (
        <>
          <LandingImage />
          <div className="container">
            <div className="search">
              <h4 className="country-search">Search By Country: </h4>
              <input
                value={state.index}
                type="text"
                onChange={(e) => setState(e.target.value)}
                placeholder="Type to search by country"
                className="search-input"
              />
            </div>
            <div className="countries display">
              <ItemsCard id="123" country="Ethiopia" />
            </div>
          </div>
        </>
      )
}
    </>
  );
};

export default Home;
