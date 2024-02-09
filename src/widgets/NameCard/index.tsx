import './index.scss';
import { useState } from 'react';

import { Link } from 'react-router-dom';

import { useStore } from '../../shared/Store';

export function NameCard() {
  const [isVisible, setIsVisible] = useState(!localStorage.getItem('username'));
  const [username, setUsername] = useState('');
  const myStore = useStore();

  const handleSubmit = () => {
    setIsVisible(false);
    localStorage.setItem('username', username);
    myStore.setUserName(username);
  };
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };
  console.log(myStore);
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
