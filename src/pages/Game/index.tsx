import '../styles/index.scss';

import { GameCard } from '../../widgets/GameCard';
import { UserInfo } from '../../widgets/UserInfo';

export function Game() {
  return (
    <div className='bank-background'>
      <GameCard />
      <UserInfo />
    </div>
  );
}
