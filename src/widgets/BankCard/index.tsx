import './index.scss';
import { FC, useState } from 'react';

import cardBank from '../../assets/bankCard.png';
import noBtn from '../../assets/noBtn.png';
import yesBtn from '../../assets/yesBtn.png';

interface BankCardProps {
  content: string;
  isCorrect: boolean;
  updateResult: (isCorrect: boolean) => void;
}

const BankCard: FC<BankCardProps> = ({ content, isCorrect, updateResult }) => {
  const [isAnswered, setIsAnswered] = useState(false);

  const handleAnswer = (selectedAnswer: boolean) => {
    if (!isAnswered) {
      setIsAnswered(true);
      updateResult(selectedAnswer === isCorrect);
    }
  };

  return (
    <>
      <div className='bank-card-game'>
        <img src={cardBank} height={200} alt='card' />
        <div>{content}</div>
        <div onClick={() => handleAnswer(false)}>
          <button className='noBtn'>
            <img src={noBtn} width={35} alt='no' />
          </button>
        </div>
        <div onClick={() => handleAnswer(true)}>
          <button className='yesBtn'>
            <img src={yesBtn} width={35} alt='no' />
          </button>
        </div>
      </div>
    </>
  );
};

export default BankCard;
