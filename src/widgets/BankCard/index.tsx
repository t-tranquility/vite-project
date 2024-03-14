import React, { useState } from 'react';

import './index.scss';
import cardBank from '../../assets/bankCard.png';
import noBtn from '../../assets/noBtn.png';
import noBtnSelected from '../../assets/noBtnSelected.png';
import yesBtn from '../../assets/yesBtn.png';
import yesBtnSelected from '../../assets/yesBtnSelected.png';
import { useGameStore } from '../../shared/services/useScore.service';

interface BankCardProps {
  content: string;
  questionId: number;
}

export const BankCard: React.FC<BankCardProps> = ({ content, questionId }) => {
  const [noBtnImage, setNoBtnImage] = useState(noBtn);
  const [yesBtnImage, setYesBtnImage] = useState(yesBtn);
  const { addAnswer } = useGameStore();

  const handleYesClick = () => {
    setNoBtnImage(noBtn);
    setYesBtnImage(yesBtnSelected);
    addAnswer(questionId, true);
  };

  const handleNoClick = () => {
    setNoBtnImage(noBtnSelected);
    setYesBtnImage(yesBtn);
    addAnswer(questionId, false);
  };

  return (
    <div className='bank-card-game'>
      <img src={cardBank} height={200} alt='card' />
      <div>{content}</div>
      <div>
        <button onClick={handleNoClick} className='noBtn'>
          <img src={noBtnImage} width={35} alt='no' />
        </button>
      </div>
      <div>
        <button onClick={handleYesClick} className='yesBtn'>
          <img src={yesBtnImage} width={35} alt='yes' />
        </button>
      </div>
    </div>
  );
};
