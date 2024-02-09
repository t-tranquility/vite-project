import './index.scss';
import { FC, useState } from 'react';

import cardBank from '../../assets/bankCard.png';
import noBtn from '../../assets/noBtn.png';
import noBtnSelected from '../../assets/noBtnSelected.png';
import yesBtn from '../../assets/yesBtn.png';
import yesBtnSelected from '../../assets/yesBtnSelected.png';

interface BankCardProps {
  content: string;
  isCorrect: boolean;
  updateResult: (isCorrect: boolean) => void;
}

export const BankCard: FC<BankCardProps> = ({ content, isCorrect, updateResult }) => {
  const [, setIsAnswered] = useState<boolean>(false);
  const [selectedAnswers, setSelectedAnswers] = useState({
    true: false,
    false: false,
  });
  const [buttonImages, setButtonImages] = useState({
    true: yesBtn,
    false: noBtn,
  });

  const handleAnswer = (selected: boolean) => {
    setIsAnswered(true);

    setSelectedAnswers((prevState) => ({
      ...prevState,
      [selected]: !prevState[selected],
    }));

    if (selected) {
      setButtonImages({
        true: yesBtnSelected,
        false: noBtn,
      });
    } else {
      setButtonImages({
        true: yesBtn,
        false: noBtnSelected,
      });
    }

    updateResult(selected === isCorrect);
  };

  return (
    <div className='bank-card-game'>
      <img src={cardBank} height={200} alt='card' />
      <div>{content}</div>
      <div onClick={() => handleAnswer(false)}>
        <button className={selectedAnswers.false ? 'noBtnActive' : 'noBtn'}>
          <img src={buttonImages.false} width={35} alt='no' />
        </button>
      </div>
      <div onClick={() => handleAnswer(true)}>
        <button className={selectedAnswers.true ? 'yesBtnActive' : 'yesBtn'}>
          <img src={buttonImages.true} width={35} alt='yes' />
        </button>
      </div>
    </div>
  );
};
