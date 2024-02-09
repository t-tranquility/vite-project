import '../styles/index.scss';
import cx from 'classnames';
import { Link, useParams } from 'react-router-dom';

import { GreetingCard } from '../../widgets/GreetingCard';
import { NextBtn } from '../../widgets/NextBtn';

const mock: Record<string, string> = {
  bank: `Банк`,
  atm: 'Банкомат',
  insurance: 'Страховая компания',
  house: 'Личный бюджет',
  currency: 'Обменник валют',
};

export function Greeting() {
  const { page } = useParams();

  console.log(page);

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
      <GreetingCard>{page ? <p>{mock[page]}</p> : <p>Nothing</p>}</GreetingCard>
      <Link to={`/theory/${page}`}>
        <NextBtn />
      </Link>
    </div>
  );
}
