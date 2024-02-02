import './index.scss';
import { Link } from 'react-router-dom';

import nextBtn from '../../assets/nextBtn.png';
function GreetingCard() {
  return (
    <>
      <div className='wrapper-greeting'>
        <p>Добро пожаловать в Банк</p>
        <p>Банк -это дом, где хранятся деньги.</p>
      </div>
      <Link to='/theory'>
        <button>
          <p>далее</p>
          <img src={nextBtn} width={25} alt='next' />
        </button>
      </Link>
    </>
  );
}

export default GreetingCard;
