import './index.scss';
import { Link } from 'react-router-dom';

import { useGameStore } from '../../shared/services/useScore.service';

export function ResultCard() {
  const { correctAnswersCount, totalQuestions } = useGameStore();

  return (
    <>
      <div className='wrapper-result wrapper-card'>
        <div className='header-result-card'>
          <p>Результат</p>
        </div>
        <div className='content-result-card'>
          <p className='correct-answers'>Правильных ответов: {correctAnswersCount}</p>
          <p className='total-amount'>Общее количество вопросов: {totalQuestions}</p>
          <p className='suns'>Солнышки: +{correctAnswersCount}</p>
        </div>
      </div>
      <Link to='/'>
        <button className='back-to-map'>Назад на карту</button>
      </Link>
    </>
  );
}
