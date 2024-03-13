import './index.scss';
import { useState } from 'react';

import { useForm } from 'react-hook-form';

import { useUserService } from '../../shared/services/useUser.service';

type FormValues = {
  username: string;
  password: string;
};

export function NameCard() {
  const { register, handleSubmit } = useForm<FormValues>();

  const [isVisible, setIsVisible] = useState(true);
  const { loginUser, registerUser, error } = useUserService();

  const onSubmit: SubmitHandler<FormValues> = (
    data: { username: string; password: string },
    e: { nativeEvent: { submitter: { name: string } } },
  ) => {
    if (e.nativeEvent.submitter.name === 'signIn') {
      loginUser(data.username, data.password);
      if (!error) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    } else if (e.nativeEvent.submitter.name === 'signUp') {
      registerUser(data.username, data.password);
      if (!error) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }
  }; // переписать через try catch

  return (
    <>
      {isVisible && (
        <div className='wrapper-name'>
          <form className='login-box' onSubmit={handleSubmit(onSubmit)}>
            <div className='user-box'>
              <input
                type='text'
                placeholder='Username'
                {...register('username', { required: true, max: 20, min: 3, maxLength: 20 })}
              />
            </div>
            <div className='user-box'>
              <input
                type='password'
                placeholder='Password'
                {...register('password', { required: true, max: 20, min: 8, maxLength: 20 })}
              />
            </div>
            {error && <div className='error-message'>{error}</div>}
            <div className='wrap-btn'>
              <div>
                <button className='btn-for-nameCard' type='submit' name='signIn'>
                  Sign In
                </button>
              </div>
              <div>
                <button className='btn-for-nameCard' type='submit' name='signUp'>
                  Sign Up
                </button>
              </div>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
