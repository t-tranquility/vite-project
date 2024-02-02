import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import './index.scss';
import nextTheoryBtn from '../../assets/nextBtn.png';
import teacher from '../../assets/teacher.png';
import toGame from '../../assets/toGame.png';

function TheoryPart() {
  const navigate = useNavigate();

  const [displayText, setDisplayText] = useState(
    'Банк - это место, где люди могут хранить свои деньги и получать помощь в управлении своими финансами. Банки помогают нам платить за вещи, которые мы хотим купить, например, игрушки или еду. Они также дают нам возможность получать зарплату и отправлять деньги друзьям и семье. Банки очень важны для экономики страны, потому что они помогают людям и бизнесам расти и развиваться.',
  );
  const [buttonImage, setButtonImage] = useState(nextTheoryBtn);

  const onClick = () => {
    if (buttonImage === nextTheoryBtn) {
      setDisplayText('Для закрепления информации туда сюда и игра');
      setButtonImage(toGame);
    } else {
      navigate('/game');
    }
  };

  return (
    <>
      <div className='wrapper-theorypart'>
        <div className='teacher-img'>
          <img src={teacher} height={600} alt='teacher' />
        </div>
        <div className='theory-card'>
          <p>{displayText}</p>
        </div>
      </div>
      <button onClick={onClick}>
        <p>далее</p>
        <img src={buttonImage} width={25} alt='next' />
      </button>
    </>
  );
}

export default TheoryPart;
