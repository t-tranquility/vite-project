import './index.scss';
import PropTypes from 'prop-types';

import nextBtn from '../../assets/nextBtn.png';

export function NextBtn({ onClick }) {
  return (
    <button className='nextBtn' onClick={onClick}>
      <p>далее</p>
      <img src={nextBtn} width={25} alt='next' />
    </button>
  );
}

NextBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
};
