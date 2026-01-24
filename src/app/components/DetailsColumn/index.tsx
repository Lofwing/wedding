'use client';

import {FC} from 'react';
import Text from '@/app/components/Text';
import classNames from 'classnames';

type DetailsColumnProps = {
  title?: string;
  text?: string;
};

const wrapperClasses = classNames('bg-surface rounded-2xl p-8');

const DetailsColumn: FC<DetailsColumnProps> = (props) => {
  const {title, text} = props;

  return (
    <div className={wrapperClasses}>
      <Text elementType='h3' size='headline-3' weight='bold' className='mb-4'>
        {title}
      </Text>
      <Text elementType='p' size='base' className='!font-bold'>
        {text}
      </Text>
    </div>
  );
};

export default DetailsColumn;
