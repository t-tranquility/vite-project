import '../styles/index.scss';
import cx from 'classnames';
import { useParams } from 'react-router-dom';

import { mockData } from './mockData';
import { TheoryPart } from '../../widgets/TheoryPart';

type Page = 'bank' | 'atm' | 'insurance' | 'house' | 'currency'; // Define valid page types

export function Theory() {
  const { page } = useParams<{ page: Page }>(); // Type params

  if (!page) return <div>Loading</div>;

  return (
    <div
      className={cx({
        'bank-background': page === 'bank',
        'atm-background': page === 'atm',
        'company-background': page === 'insurance',
        'house-background': page === 'house',
        'currency-background': page === 'currency',
      })}
    >
      <TheoryPart text={mockData[page]} section={page} />
    </div>
  );
}
