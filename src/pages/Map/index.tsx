import { Link } from 'react-router-dom';

import atm from '../../assets/atm.png';
import bank from '../../assets/bank1.png';
import cur from '../../assets/cur.png';
import house from '../../assets/house.png';
import insur from '../../assets/insur.png';
import NameCard from '../../widgets/NameCard';
import './index.scss';

function Map() {
  return (
    <>
      <div className='map-background'>
        <div className='wrapper-map'>
          <div className='bankBtn'>
            <Link to='/greeting'>
              <img src={bank} width={250} height={250} alt='loko' />
            </Link>
          </div>
          <img className='atmBtn' src={atm} alt='loko' />
          <img className='insurBtn' src={insur} alt='loko' />
          <img className='curBtn' src={cur} alt='loko' />
          <img className='houseBtn' src={house} alt='loko' />
        </div>
      </div>
      <div className='lolo'>
        <NameCard />
      </div>
    </>
  );
}

export default Map;
