import './index.scss';

import ReactLoading from 'react-loading';

export function Loading() {
  return (
    <div className='wrapper-loading'>
      <ReactLoading type={'balls'} color='#ffd498' />
    </div>
  );
}
