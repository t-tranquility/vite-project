import { useState } from 'react';

import { useForm, SubmitHandler } from 'react-hook-form';

import './index.scss';
import { useUserService } from '../../shared/services/useUser.service';

type FormValues = {
  username: string;
  password: string;
};

export function NameCard({ onClose }: { onClose: () => void }) {
  const { register, handleSubmit } = useForm<FormValues>();
  const [isVisible, setIsVisible] = useState(true);
  const { loginUser, registerUser, error } = useUserService();

  const onSubmit: SubmitHandler<FormValues> = (data, event) => {
    try {
      const submitter = (event?.nativeEvent as SubmitEvent)?.submitter as HTMLButtonElement;
      if (submitter.name === 'signIn') {
        loginUser(data.username, data.password);
      } else if (submitter.name === 'signUp') {
        registerUser(data.username, data.password);
      }

      if (!error) {
        setIsVisible(true);
        onClose(); // Закрываем форму после успешной регистрации/логина
      } else {
        setIsVisible(false);
      }
    } catch (err) {
      console.error('Error:', err);
      setIsVisible(false);
    }
  };

  return (
    <>
      {isVisible && (
        <div className='wrapper-name'>
          <form className='login-box' onSubmit={handleSubmit(onSubmit)}>
            <div className='user-box'>
              <input
                type='text'
                placeholder='Username'
                {...register('username', { required: true, maxLength: 20, minLength: 3 })}
              />
            </div>
            <div className='user-box'>
              <input
                type='password'
                placeholder='Password'
                {...register('password', { required: true, maxLength: 20, minLength: 8 })}
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
