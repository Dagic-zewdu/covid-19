/* eslint-disable no-nested-ternary */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCovidDataAsync } from '../../redux/covid/covidActions';
import Navbar from './Navbar';
import Spinner from './Spinner';

function BasicLayoutContainer({ children, navtitle }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addCovidDataAsync());
  }, []);

  const { loading, error } = useSelector((state) => state);
  return (
    <>
      <Navbar title={navtitle} />
      {
      loading
        ? <Spinner />
        : error
          ? <h1 className="text-center">{error}</h1>
          : children

      }
    </>
  );
}

export default BasicLayoutContainer;
