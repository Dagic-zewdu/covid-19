import React, { useState } from 'react';
import LandingImage from '../Layouts/LandingImage';
import ItemsCard from './countryItem';

const Home = () => {
  const [state, setState] = useState({
    index: '',
  });

  return (
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
          <ItemsCard id={123} country="Ethiopia" />
        </div>
      </div>
    </>
  );
};

export default Home;
