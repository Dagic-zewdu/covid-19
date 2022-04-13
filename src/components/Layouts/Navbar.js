/* eslint-disable react/prop-types */
import { IoIosArrowBack } from 'react-icons/io';
import { BiMicrophone, BiCog } from 'react-icons/bi';
import './styles/Navbar.css';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addCovidDataAsync } from '../../redux/covid/covidActions';

const Navbar = ({ title }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addCovidDataAsync());
  }, []);
  return (
    <nav className="navbar">
      <div className="nav-items">
        <Link to="/">
          {title ? <IoIosArrowBack className="arrow" /> : ''}
        </Link>
        <h2 className="date">2022</h2>
        {
      title
        ? (
          <h4 className="header-text">
            {' '}
            {title}
            {' '}
          </h4>
        )
        : (
          <h4 className="header-text">
            Countries &apos; s COVID-19 Data
          </h4>
        )
}
      </div>
      <div className="icons">
        <span className="icons-mic">
          <BiMicrophone />
        </span>
        <span className="setting">
          <BiCog />
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
