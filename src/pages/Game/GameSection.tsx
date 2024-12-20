import { useParams } from 'react-router-dom';

import '../styles/index.scss';
import AtmQCard from '../../widgets/AtmQCard/AtmQCard';
import { GameCard } from '../../widgets/GameCard';
import { UserInfo } from '../../widgets/UserInfo';

export function GameSection() {
  const { section } = useParams<{ section: string }>(); // Получаем параметр пути
  if (section === 'bank') {
    return (
      <div className='bank-background'>
        <GameCard />;
        <UserInfo />
      </div>
    ); // Компонент с вопросами про банк
  } else if (section === 'atm') {
    return (
      <div className='atm-background'>
        <AtmQCard />
        <UserInfo />
      </div>
    ); // Компонент с вопросами про банкоматы
  } else {
    return <p>Раздел не найден</p>; // Для неверного пути
  }
}
