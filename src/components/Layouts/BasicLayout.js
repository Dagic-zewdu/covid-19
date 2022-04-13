/* eslint-disable no-nested-ternary */
/* eslint-disable react/prop-types */
import React from 'react';
import Navbar from './Navbar';
import Spinner from './Spinner';

function BasicLayoutContainer({
  children, loading, error, navtitle,
}) {
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
