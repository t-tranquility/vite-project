import './index.scss';

import { Link } from 'react-router-dom';

import { useGameStore } from '../../shared/services/useScore.service';
import { BankCard } from '../BankCard';
import { NextBtn } from '../NextBtn';

export function GameCard() {
  const { currentQuestionIndex, questions } = useGameStore();

  return (
    <>
      <div className='wrapper-game-card wrapper-card'>
        <div className='header-game-card'>
          <div className='header-game-card-left'>
            <p className='header_name-game-card'>Правда или ложь</p>
            <p className='header_description-game-card'>
              В картотеке спутались все факты про банк. <br /> Помоги выбрать какие факты из этих правдивы, а какие
              ложны.
            </p>
          </div>
          <div className='header-game-card-right'>
            <p className='header_score-game-card'>За каждый правильный ответ ты получишь 1 солнышко</p>
          </div>
        </div>
        <div className='content-game-card'>
          {questions.map((question) => (
            <BankCard key={question.id} content={question.content} currentQuestionIndex={currentQuestionIndex} />
          ))}
        </div>
      </div>
      {currentQuestionIndex === questions.length && (
        <Link to='/result'>
          <NextBtn />
        </Link>
      )}
    </>
  );
}
