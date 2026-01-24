'use client';
import classNames from 'classnames';
import {FC} from 'react';
import MaxWidth from '@/app/components/MaxWidth';
import Text from '@/app/components/Text';

const wrapperClasses = classNames(
  'text-on-background',
  'text-center',
  'my-12',
  'w-full',
);

const GiftBlock: FC = () => {
  return (
    <section className={wrapperClasses} data-component-name='GiftBlock'>
      <MaxWidth className='bg-background p-16 rounded-3xl'>
        <div className='text-left max-w-[680px]'>
          <Text
            elementType='h2'
            size='headline-2'
            weight='bold'
            className='mb-4 '
          >
            Presenter - <br />
            Vad skriver vi här?
          </Text>
          <Text elementType='p' size='base' className='mb-4'>
            Efter analyser av glädjeindex och framtida användbarhet, har vi
            några rekommendationer: 👉 Det bästa ni kan ge är er närvaro, skratt
            och dans. 👉 Om ni ändå vill ge något materiellt, uppskattar vi
            [exempel: bidrag till bröllopsresa, gemensamt minnesalbum, eller
            valfri investering i framtida glädje]. Vi gillar överraskningar och
            kreativitet, men kom ihåg: ingen present är viktigare än att ni är
            där och firar med oss.
          </Text>
        </div>
      </MaxWidth>
    </section>
  );
};

export default GiftBlock;
