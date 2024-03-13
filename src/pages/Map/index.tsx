import { Link } from 'react-router-dom';

import atm from '../../assets/atm.png';
import bank from '../../assets/bank1.png';
import cur from '../../assets/cur.png';
import house from '../../assets/house.png';
import insur from '../../assets/insur.png';
//import { NameCard } from '../../widgets/NameCard';
import './index.scss';

export function Map() {
  return (
    <>
      <div className='map-background'>
        <div className='wrapper-map'>
          <div className='bankBtn'>
            <Link to={`/greeting/bank`}>
              <img src={bank} width={250} height={250} alt='loko' />
            </Link>
          </div>
          <div className='atmBtn'>
            <Link to={`/greeting/atm`}>
              <img src={atm} width={220} height={220} alt='loko' />
            </Link>
          </div>
          <div className='insurBtn'>
            <Link to={`/greeting/insurance`}>
              <img src={insur} width={220} height={220} alt='loko' />
            </Link>
          </div>
          <div className='curBtn'>
            <Link to={`/greeting/currency`}>
              <img src={cur} width={220} height={220} alt='loko' />
            </Link>
          </div>
          <div className='houseBtn'>
            <Link to={`/greeting/house`}>
              <img src={house} width={220} height={220} alt='loko' />
            </Link>
          </div>
        </div>
      </div>
      {/* <div className='lolo'>
        <NameCard />
      </div>
      */}
    </>
  );
}
