import './index.scss';
import nextBtn from '../../assets/nextBtn.png';
export function NextBtn() {
  return (
    <button className='nextBtn'>
      <p>далее</p>
      <img src={nextBtn} width={25} alt='next' />
    </button>
  );
}
