import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../Layouts/Navbar';

const Details = () => {
  const { id } = useParams();

  // const CurrFlag = `https://countryflagsapi.com/png/${countryData[0].country}`;

  return (
    <>
      <Navbar title={`country name covid statics${id}`} />
      <div className="container">
        {// covidData.length === 0 && (
        //   <h3 className="wait">Loading Covid-19 Data...</h3>
        // )
    }

        <div>
          <section className="info-covid display">
            <div className="flag">
              <img className="img-world" src="" alt="world-covid" />
            </div>
            <div>
              <p className="info">Country name</p>
              <p className="info">
                Total Covid Case:
                {' '}
                TotalConfirmed
              </p>
            </div>
          </section>
        </div>
        <div className="country-info">
          <p>STATS BY COUNTRY</p>
        </div>
        <ul>
          <li>
            <span className="left">Date:</span>
            <div className="right">today data</div>
          </li>
          <li>
            <span className="left">Total Confirmed:</span>
            <div className="right">TotalConfirmed</div>
          </li>
          <li>
            <span className="left">New Confirmed:</span>
            <div className="right">NewConfirmed</div>
          </li>
          <li>
            <span className="left">New Recovered:</span>
            <div className="right">NewRecovered</div>
          </li>
          <li>
            <span className="left">Total Deaths:</span>
            <div className="right">TotalDeaths</div>
          </li>
          <li>
            <span className="left">New Deaths:</span>
            <div className="right">NewDeaths</div>
          </li>
        </ul>

      </div>
    </>
  );
};

export default Details;
