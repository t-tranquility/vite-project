// import { useEffect } from 'react';

import { AtmTestCard } from '../AtmTestCard/AtmTestCard';

// import { Link } from 'react-router-dom';

// import { submitAnswers } from '../../shared/services/submitAnswers.service';
// // import { getQuestions } from '../../shared/services/useQuestions.service';
// // import { useGameStore } from '../../shared/services/useScore.service';
// import { BankCard } from '../BankCard';
// import { NextBtn } from '../NextBtn';

export function AtmQCard() {
  //   const { questions, answers, setQuestions } = useGameStore();

  //   useEffect(() => {
  //     const fetchQuestions = async () => {
  //       const questions = await getQuestions();
  //       setQuestions(questions);
  //     };

  //     fetchQuestions();
  //   }, [setQuestions]);

  //   console.log(answers, answers.length);

  return (
    <>
      <div className='wrapper-game-card wrapper-card flex flex-col'>
        <div className='header-game-card'>
          <div className='header-game-card-left'>
            <p className='header_name-game-card'>Заголовок</p>
            <p className='header_description-game-card'>Объяснение правил должно быть длинным иначе полетит текст</p>
          </div>
          <div className='header-game-card-right'>
            <p className='header_score-game-card'>За каждый правильный ответ ты получишь 1 солнышко</p>
          </div>
        </div>
        <div className='content-game-card'>
          {/* {questions.map((question) => (
            <BankCard key={question.id} content={question.content} questionId={question.id} />
          ))} */}
          <AtmTestCard />
        </div>
      </div>
      {/* {answers.length === questions.length && (
        <Link to='/result'>
          <NextBtn onClick={submitAnswers} />
        </Link>
      )} */}
    </>
  );
}
