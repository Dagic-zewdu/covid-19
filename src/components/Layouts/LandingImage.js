import numberSeparator from 'number-separator';
import { useSelector } from 'react-redux';
import { tellToday } from '../../utils/date';
import './LandingImage.css';

const LandingImage = () => {
  const { global } = useSelector((state) => state);
  //   NewConfirmed: 532118
  // NewDeaths: 1720
  // NewRecovered: 0
  // TotalDeaths: 6177016
  // TotalRecovered: 0
  return (
    <div className="hero-wrapper">
      <div className="hero">
        <div className="content">
          <h1 className="white">
            {tellToday()}
            {' '}
            Globall data
          </h1>
          <h4 className="white">
            Totall Confirmed :
            {numberSeparator(global.TotalConfirmed)}
          </h4>

        </div>
      </div>
    </div>
  );
};
export default LandingImage;
