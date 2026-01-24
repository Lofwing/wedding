'use client';

import classNames from 'classnames';
import {FC} from 'react';
import Text from '@/app/components/Text';
import MaxWidth from '@/app/components/MaxWidth';
import {Countdown} from '@/app/components/CountDown';
import Image from 'next/image';

const wrapperClasses = classNames(
  'text-on-background',
  'text-center',
  'px-10 py-[160px]',
  'w-full min-h-[72vh]',
  'flex items-center justify-center',
  'relative overflow-hidden',
);

const HeroBlock: FC = () => {
  return (
    <section className={wrapperClasses} data-component-name='HeroBlock'>
      <MaxWidth>
        <Image
          // src='/test3.jpg'
          // src='/backgrounds/3.jpg'
          src='/backgrounds/sunlight.png'
          alt='Wedding Couple'
          width={2000}
          height={2000}
          className='fixed inset-0 object-cover -z-10 h-full w-full'
        />
        {/* test3,  3 , 4, 5, 7,8*/}
        {/* 3,5, 10 */}
        <Text elementType='h2' size='label' weight='bold' className='mb-4'>
          Beslut: JA
        </Text>
        <Text elementType='h1' size='headline-1' weight='bold' className='mb-4'>
          Löfwing <br /> Ljungeskog
        </Text>
        <Text size='base'>--- 13 juni 2026 ---</Text>
        <Countdown targetDate='2026-06-13T16:00:00' />
      </MaxWidth>
    </section>
  );
};

export default HeroBlock;
