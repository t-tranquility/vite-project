import './index.scss';
import { FC, ReactNode } from 'react';

export const GreetingCard: FC<{ children?: ReactNode | ReactNode[] }> = ({ children }) => {
  return <div className='wrapper-greeting wrapper-card'>{children}</div>;
};
