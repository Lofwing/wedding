'use client';

import classNames from 'classnames';
import {FC} from 'react';
import Text from '@/app/components/Text';
import MaxWidth from '@/app/components/MaxWidth';
import DetailsColumn from '@/app/components/DetailsColumn';

const wrapperClasses = classNames(
  'text-on-background',
  'text-center',
  'py-20',
  'w-full',
);

const innerClasses = classNames('w-full flex flex-col justify-center');

const columnsWrapperClasses = classNames('grid gap-4 grid-cols-3 ', 'w-full');

const DetailsBlock: FC = () => {
  return (
    <section className={wrapperClasses} data-component-name='DetailsBlock'>
      <MaxWidth className={innerClasses}>
        <Text elementType='h2' size='headline-2' className='mb-6'>
          Detaljer
        </Text>
        <div className={columnsWrapperClasses}>
          <DetailsColumn title='Datum' text='13 juni 2026' />
          <DetailsColumn title='Plats' text='Hovslätts hembygdsgård' />
          <DetailsColumn title='Tid' text='Vigsel 16.00, mingel från 15.30' />
        </div>
        <div className='flex justify-between mt-12 '>
          <Text size='base' className='text-left w-[68%]'>
            Både vigsel och efterförljande middag/fest kommer att äga rum på
            hovslätts hembyggdsgård. Vigsel kommer att äga rum kl.16 men ni är
            välkomna att skåla in dagen från 15.30.
          </Text>
          <div className='sticky top-4 flex justify-end items-end'>
            <div className='flex items-center gap-2'>
              <div>OSA senast 1/5</div>
              <button className='bg-primary px-4 py-3 rounded-full font-bold'>
                Till OSA
              </button>
            </div>
          </div>
        </div>
      </MaxWidth>
    </section>
  );
};

export default DetailsBlock;
