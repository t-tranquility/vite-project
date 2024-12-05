import { useState } from 'react';

import { Link } from 'react-router-dom';

import atm from '../../assets/atm.png';
import bank from '../../assets/bank1.png';
import cur from '../../assets/cur.png';
import house from '../../assets/house.png';
import insur from '../../assets/insur.png';
import './index.scss';

export function Map() {
  const [showMessage, setShowMessage] = useState<string | null>(null);

  // Функция для отображения сообщения
  const handleMouseEnter = (level: string) => {
    setShowMessage(`Этот уровень пока не открыт: ${level}`);
  };

  // Функция для скрытия сообщения
  const handleMouseLeave = () => {
    setShowMessage(null);
  };

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
          <div
            className='insurBtn'
            onMouseEnter={() => handleMouseEnter('Страхование')}
            onMouseLeave={handleMouseLeave}
          >
            <img src={insur} width={220} height={220} alt='loko' />
          </div>
          <div
            className='curBtn'
            onMouseEnter={() => handleMouseEnter('Обменник валют')}
            onMouseLeave={handleMouseLeave}
          >
            <img src={cur} width={220} height={220} alt='loko' />
          </div>
          <div
            className='houseBtn'
            onMouseEnter={() => handleMouseEnter('Личный бюджет')}
            onMouseLeave={handleMouseLeave}
          >
            <img src={house} width={220} height={220} alt='loko' />
          </div>
        </div>
      </div>
      {showMessage && <div className='level-message'>{showMessage}</div>}
    </>
  );
}
