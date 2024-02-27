import './index.scss';
import { useState } from 'react';

import { Link } from 'react-router-dom';

import { userService } from '../../shared/services/user.service';
import { useStore } from '../../shared/Store';

export function NameCard() {
  const [isVisible, setIsVisible] = useState(!localStorage.getItem('username'));
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const myStore = useStore();
  const connection = userService();

  const handleLogin = async () => {
    setIsVisible(false);

    try {
      await connection.sendUserName(username, password);
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  const handleRegister = async () => {
    setIsVisible(false);

    try {
      await connection.registerUser(username, password);
    } catch (error) {
      console.error('Registration error:', error);
    }
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
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
              <div className='user-box'>
                <input type='password' name='' required onChange={handlePasswordChange} />
                <label htmlFor='password'>Password</label>
              </div>
              <div className='wrap-btn'>
                <div>
                  <button onClick={handleLogin}>login</button>
                </div>
                <br />
                <br />
                <div>
                  <button onClick={handleRegister}>register</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
