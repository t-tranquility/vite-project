import './index.scss';
import { Link } from 'react-router-dom';
export function ResultCard() {
  return (
    <>
      <div className='wrapper-result wrapper-card'>
        <div className='header-result-card'>
          <p>Результат</p>
        </div>
        <div className='content-result-card'>
          <p className='correct-answers'>Правильных ответов: 5</p>
          <p className='total-amount'>Общее количество вопросов: 5</p>
          <p className='suns'>Солнышки: +5</p>
        </div>
      </div>
      <Link to='/'>
        <button className='back-to-map'>Назад на карту</button>
      </Link>
    </>
  );
}
