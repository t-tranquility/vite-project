import '../styles/index.scss';
import cx from 'classnames';
import { useParams } from 'react-router-dom';

import { mockData } from './mockData';
import { TheoryPart } from '../../widgets/TheoryPart';

type Page = 'bank' | 'atm' | 'insurance' | 'house' | 'currency'; // Указываем допустимые значения

export function Theory() {
  const { page } = useParams<{ page: Page }>(); // Типизируем параметр

  if (!page) return <div>Loading</div>;

  return (
    <div
      className={
        cx({ 'bank-background': page === 'bank' }) ||
        cx({ 'atm-background': page === 'atm' }) ||
        cx({ 'company-background': page === 'insurance' }) ||
        cx({ 'house-background': page === 'house' }) ||
        cx({ 'currency-background': page === 'currency' })
      }
    >
      <TheoryPart text={mockData[page]} section={page} />
    </div>
  );
}
