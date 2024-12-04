import '../styles/index.scss';
import cx from 'classnames';
import { useParams } from 'react-router-dom';

import { TheoryPart } from '../../widgets/TheoryPart';

const mock: Record<string, string> = {
  bank: `Банк — это место, где люди могут хранить свои деньги в безопасности. В банке работают специальные люди, которые помогают управлять деньгами. Люди могут приносить свои деньги в банк, чтобы они были в безопасности, и брать их обратно, когда им нужно. Банк также может давать деньги в долг, если людям нужно что-то купить, например, дом или машину. Потом эти люди возвращают деньги банку с небольшой доплатой, которая называется "проценты". Дальше мы более подробно узнаем как банк работает изнутри.`,
  atm: 'Банкомат теория',
  insurance: 'Страховая компания теория',
  house: 'Личный бюджет теория',
  currency: 'Обменник валют теория',
};

export function Theory() {
  const { page } = useParams();

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
      {<TheoryPart text={mock[page]} />}
    </div>
  );
}
