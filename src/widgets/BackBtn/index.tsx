import './index.scss';
import backBtn from '../../assets/backBtn.png';
export function BackBtn() {
  return (
    <button className='backBtn'>
      <img src={backBtn} width={25} alt='next' />
      <p>назад</p>
    </button>
  );
}
