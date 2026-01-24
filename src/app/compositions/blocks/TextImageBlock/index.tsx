'use client';
import {FC} from 'react';
import Text from '@/app/components/Text';
import Image from 'next/image';
import TwoColumnGrid from '../../TwoColumnGrid';
import classNames from 'classnames';

const wrapperClasses = classNames('bg-background text-on-background');

const imageClasses = classNames(
  'object-cover rounded-3xl',
  'w-full h-full object-top',
);

const rightClasses = classNames(
  'flex flex-col justify-center',
  'text-left h-full',
);

const TextImageBlock: FC = () => {
  return (
    <div className={wrapperClasses}>
      <TwoColumnGrid gapClassName='gap-8'>
        <TwoColumnGrid.Left className='aspect-square'>
          <Image
            src='/test2.jpg'
            alt='Hero Image'
            width={400}
            height={400}
            className={imageClasses}
          />
        </TwoColumnGrid.Left>

        <TwoColumnGrid.Right className={rightClasses}>
          <Text elementType='h2' size='headline-2' className='mb-6'>
            Efter noggrann analys av våra känslor, framtidsprognoser och
            gemensamma skratt har vi nått ett stabilt beslut.
          </Text>
          <Text elementType='div' size='base'>
            <ul className='mb-8'>
              <li> 👉 Vi vill gifta oss.</li>
              <li>👉 Vi vill göra det tillsammans med er. </li>
            </ul>
            Beslutet är välgrundat och känns ovanligt självklart.
          </Text>
        </TwoColumnGrid.Right>
      </TwoColumnGrid>
    </div>
  );
};
export default TextImageBlock;
