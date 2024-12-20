import './index.scss';
import { useEffect, useState } from 'react';

import sun from '../../assets/sun.svg';
import userInfo from '../../assets/userInfo.png';
import { useGameStore } from '../../shared/services/useScore.service';

export function UserInfo() {
  const { sunCount } = useGameStore(); // Получаем количество солнышек из Zustand
  const [storedSunCount, setStoredSunCount] = useState<number>(0);

  // Сохраняем количество солнышек в localStorage и обновляем состояние
  useEffect(() => {
    localStorage.setItem('sunCount', sunCount.toString());
    setStoredSunCount(sunCount);
  }, [sunCount]);

  return (
    <div className='user-info-card'>
      <img src={userInfo} width={200} alt='User info' />
      <div className='info-wrapper'>
        <img src={sun} width={50} alt='sun' />
        <p className='user-sun-infocard'>{storedSunCount}</p> {/* Отображаем количество солнышек */}
      </div>
    </div>
  );
}
