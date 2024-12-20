import { useState, FC, useMemo } from 'react';

import { useNavigate } from 'react-router-dom';

import './index.scss';
import teacher from '../../assets/teacher.png';
import { BackBtn } from '../BackBtn';
import { NextBtn } from '../NextBtn';

// Update TheoryPartProps to include all Page types
interface TheoryPartProps {
  text: string;
  section: 'bank' | 'atm' | 'insurance' | 'house' | 'currency'; // Include all valid sections
}

export const TheoryPart: FC<TheoryPartProps> = ({ text, section }) => {
  const splitText = useMemo(() => {
    return text.split('/n');
  }, [text]);

  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex < splitText.length - 1) {
        return prevIndex + 1;
      } else {
        navigate(`/game/${section}`); // Переход на соответствующий раздел
        return prevIndex;
      }
    });
  };

  const BackBtnVisible = currentIndex > 0;

  const handleBackClick = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex > 0) {
        return prevIndex - 1;
      } else {
        return prevIndex;
      }
    });
  };

  return (
    <>
      <div className='wrapper-theorypart'>
        <div className='teacher-img'>
          <img src={teacher} height={600} alt='teacher' />
        </div>
        <div className='theory-card'>
          <p>{splitText[currentIndex]}</p>
        </div>
      </div>
      <div className='buttons-navigate'>
        {BackBtnVisible && (
          <button onClick={handleBackClick}>
            <BackBtn />
          </button>
        )}
        <button onClick={handleNextClick}>{currentIndex === splitText.length - 1 ? <NextBtn /> : <NextBtn />}</button>
      </div>
    </>
  );
};
