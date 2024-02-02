import './index.scss';
import GameCard from '../../widgets/GameCard';
import UserInfo from '../../widgets/UserInfo';

function Game() {
  return (
    <>
      <div className='greeting-background'>
        <GameCard />
        <UserInfo />
      </div>
    </>
  );
}

export default Game;
