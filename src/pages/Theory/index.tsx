import '../styles/index.scss';
import cx from 'classnames';
import { useParams } from 'react-router-dom';

import { TheoryPart } from '../../widgets/TheoryPart';

const mock: Record<string, string> = {
  bank: `Кредиты физическим лицам классифицируются на кредиты на финансирование недвижимости и на кредиты на потребительские нужды.

  К кредитам на финансирование недвижимости относятся кредиты, предоставляемые на строительство (приобретение, реконструкцию) жилых помещений (жилых домов, квартир) и нежилых помещений (гаражей, садовых домиков и др.)
  
  
  Льготные кредиты – это кредиты, условия и порядок выдачи которых определены указами Президента Республики Беларусь.
  
  Условия и порядок предоставления не льготных кредитов устанавливаются банком самостоятельно.`,
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
