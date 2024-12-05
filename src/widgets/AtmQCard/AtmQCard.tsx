import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import './AtmQCard.css';

// Пример вопросов и ответов (обновлённые)
const questions = [
  { id: 1, question: 'Как называется устройство для снятия наличных?', answer: 'БАНКОМАТ' },
  { id: 2, question: 'Сколько цифр в пин-коде?', answer: 'ЧЕТЫРЕ' },
  { id: 3, question: 'Какая карта используется для доступа к банкомату?', answer: 'БАНКОВСКАЯ' },
  { id: 4, question: 'Как называется сумма денег на вашем счёте?', answer: 'БАЛАНС' },
  { id: 5, question: 'Как называются деньги, которые лежат на карте?', answer: 'СЧЕТ' },
  { id: 6, question: 'Как называется цифровой код подтверждения операции?', answer: 'ПИН' },
  { id: 7, question: 'Как называется процесс пополнения баланса карты?', answer: 'ПОПОЛНЕНИЕ' },
  { id: 8, question: 'Какую карту вы используете чаще: кредитную или ___ карту?', answer: 'ДЕБЕТОВУЮ' },
  { id: 9, question: 'Что обеспечивает работу банкомата (ПО)?', answer: 'СИСТЕМА' },
  { id: 10, question: 'Как называется тип данных, который хранится на карте?', answer: 'МАГНИТНАЯ' },
];

const AtmQCard = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // Индекс текущего вопроса
  const [userAnswers, setUserAnswers] = useState([]); // Массив ответов пользователя
  const [isSubmitted, setIsSubmitted] = useState(false); // Флаг завершения игры

  const handleAnswerChange = (event: { target: { value: string } }) => {
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestionIndex] = event.target.value.toUpperCase(); // Сохраняем ответ
    setUserAnswers(newAnswers);
  };

  const handleNextQuestion = () => {
    // Переход к следующему вопросу независимо от правильности ответа
    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setIsSubmitted(true); // Если вопросы закончены, переключаем на страницу с результатами
    }
  };

  const submitAnswers = () => {
    // Здесь можно обработать ответы, например, посчитать количество правильных
    console.log('Ответы пользователя:', userAnswers);
  };

  return (
    <div className='wrapper-game-card wrapper-card flex flex-col'>
      <div className='header-game-card'>
        <div className='header-game-card-left'>
          <p className='header_name-game-card'>Кроссворд на тему &rdquo;Банкомат&rdquo;</p>
          <p className='header_description-game-card'>Ответьте на вопросы и заполните кроссворд!</p>
        </div>
        <div className='header-game-card-right'>
          <p className='header_score-game-card'>
            Вопрос {currentQuestionIndex + 1} из {questions.length}
          </p>
        </div>
      </div>

      <div className='game-content'>
        <div className='question'>
          <h2>{questions[currentQuestionIndex].question}</h2>
          <input
            type='text'
            value={userAnswers[currentQuestionIndex] || ''}
            onChange={handleAnswerChange}
            maxLength={questions[currentQuestionIndex].answer.length}
            placeholder='Введите ваш ответ'
          />
        </div>

        {!isSubmitted && currentQuestionIndex + 1 < questions.length && (
          <button onClick={handleNextQuestion} className='next-Btn'>
            Дальше
          </button>
        )}

        {isSubmitted || currentQuestionIndex + 1 === questions.length ? (
          <Link to='/result'>
            <button onClick={submitAnswers} className='next-Btn'>
              Результаты
            </button>
          </Link>
        ) : null}
      </div>
    </div>
  );
};

export default AtmQCard;