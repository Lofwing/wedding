'use client';

import classNames from 'classnames';
import {FC} from 'react';
import MaxWidth from '@/app/components/MaxWidth';
import Text from '@/app/components/Text';
import Moodboard from '@/app/compositions/Moodboard';
import TwoColumnGrid from '../../TwoColumnGrid';

type ClothesProps = {
  title?: string;
};

const wrapperClasses = classNames(
  'text-on-background',
  'text-center',
  'my-12',
  'w-full',
);

const ClothesBlock: FC<ClothesProps> = () => {
  return (
    <section className={wrapperClasses} data-component-name='ClothesBlock'>
      <MaxWidth className='bg-background p-16 rounded-3xl'>
        {/* <div className='grid grid-cols-2 gap-12'> */}

        <div className='text-left max-w-[680px]'>
          <Text
            elementType='h2'
            size='headline-2'
            weight='bold'
            className='mb-4 '
          >
            {/* Klädkod */}
            {/* Hur klär man sig på bröllopet? */}
            Klädkod - Vad tar man på sig?
          </Text>
          <Text elementType='p' size='base' className='mb-4'>
            Inga regler, inga begränsningar. Klä dig som dig själv – i den färg
            och stil som känns rätt för dagen.
          </Text>
        </div>

        {/* <div className='relative flex flex-col justify-center text-left rounded-3xl aspect-square overflow-hidden'>
            <video
              width='320'
              height='240'
              muted
              loop
              autoPlay
              className='object-cover h-full w-full absolute -left-[2px]'
            >
              <source src='/film2.mp4' type='video/mp4' />
              Your browser does not support the video tag.
            </video>
          </div>
          <TwoColumnGrid.Right>
            <figure className='rounded-3xl overflow-hidden'>
              <img src='./moodboard-12.jpg' />
            </figure>
          </TwoColumnGrid.Right> */}

        <Moodboard />
      </MaxWidth>
    </section>
  );
};

export default ClothesBlock;
