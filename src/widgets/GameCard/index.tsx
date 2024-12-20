import './index.scss';
import { useNavigate } from 'react-router-dom';

import { useGameStore } from '../../shared/services/useScore.service';
import { BankCard } from '../BankCard';
import { NextBtn } from '../NextBtn';

export function GameCard() {
  const { answers, setCorrectAnswersCount, setTotalQuestions } = useGameStore();
  const navigate = useNavigate();

  const questions = [
    { id: 1, content: 'Банк платит проценты вкладчикам' },
    { id: 2, content: 'Банк продаёт деньги, которые вышли из употребления' },
    { id: 3, content: 'Банк даёт возможность получить виртуальную карту' },
    { id: 4, content: 'Банк может хранить ваши ценные бумаги' },
    { id: 5, content: 'Банк продаёт потерянные билеты' },
  ];

  const correctAnswers: Record<number, boolean> = {
    1: true,
    2: false,
    3: true,
    4: true,
    5: false,
  };

  const calculateCorrectAnswers = () => {
    let correctCount = 0;
    answers.forEach(({ questionId, answer }) => {
      if (correctAnswers[questionId] === answer) {
        correctCount++;
      }
    });
    setCorrectAnswersCount(correctCount);
  };

  const handleNext = () => {
    setTotalQuestions(questions.length);
    calculateCorrectAnswers(); // This function will set correctAnswersCount
    navigate('/result');
  };

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
            <BankCard key={question.id} content={question.content} questionId={question.id} />
          ))}
        </div>
      </div>
      {answers.length === questions.length && (
        <button onClick={handleNext}>
          <NextBtn />
        </button>
      )}
    </>
  );
}
