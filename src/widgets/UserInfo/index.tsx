import './index.scss';
import sun from '../../assets/sun.svg';
import userInfo from '../../assets/userInfo.png';

function UserInfo() {
  return (
    <>
      <div className='user-info-card'>
        <img src={userInfo} width={200} alt='' />
        <div className='info-wrapper'>
          <img src={sun} width={50} alt='sun' />
          <p className='user-sun-infocard'>5</p>
        </div>
      </div>
    </>
  );
}

export default UserInfo;
