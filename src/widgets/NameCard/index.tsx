import './index.scss';
import { useState } from 'react';

import { Link } from 'react-router-dom';
function NameCard() {
  const [isVisible, setIsVisible] = useState(!localStorage.getItem('username'));
  const [username, setUsername] = useState('');

  const handleSubmit = () => {
    setIsVisible(false);
    localStorage.setItem('username', username);
  };
  const handleNameChange = (event) => {
    setUsername(event.target.value);
  };
  return (
    <>
      {isVisible && (
        <div className='wrapper-name'>
          <div className='login-box'>
            <h2>Login</h2>
            <form>
              <div className='user-box'>
                <input type='text' name='' required onChange={handleNameChange} />
                <label htmlFor='username'>Username</label>
              </div>
              <Link to='/' onClick={handleSubmit}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Submit
              </Link>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default NameCard;
