import './index.scss';
import { useState } from 'react';

import { Link } from 'react-router-dom';

import { BankCard } from '../BankCard';
import { NextBtn } from '../NextBtn';

export function GameCard() {
  const cardDataArray = [
    { id: 1, content: 'Банк платит проценты вкладчикам', isCorrect: true },
    { id: 2, content: 'Банк продает деньги, которые вышли из употребления', isCorrect: false },
    { id: 3, content: 'Банк дает возможность получить виртуальную карту', isCorrect: true },
    { id: 4, content: 'Банк может хранить ваши ценные бумаги', isCorrect: true },
    { id: 5, content: 'Банк продает лотерейные билеты', isCorrect: false },
  ];

  const [totalResult, setTotalResult] = useState(0);

  const updateResult = (isCorrect: boolean) => {
    if (isCorrect) {
      setTotalResult((prevResult) => prevResult + 1);
    }
  };
  console.log(totalResult);

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
          {cardDataArray.map((cardData) => (
            <BankCard
              key={cardData.id}
              content={cardData.content}
              isCorrect={cardData.isCorrect}
              updateResult={updateResult}
            />
          ))}
        </div>
      </div>
      <Link to='/result'>
        <NextBtn />
      </Link>
    </>
  );
}
