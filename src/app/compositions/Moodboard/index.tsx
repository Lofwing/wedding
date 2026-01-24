'use client';
import Text from '@/app/components/Text';
import classNames from 'classnames';
import {FC} from 'react';
import AccordionItem from '../AccordionItem';

const wrapperClasses = classNames('w-full', 'grid grid-cols-3 gap-8');

const figureClasses = classNames('bg-surface mb-4 rounded-xl overflow-hidden');

const Moadboard: FC = () => {
  return (
    <section data-component-name='Moadboard' className='text-left'>
      {/* <Text
        elementType='p'
        size='base'
        weight='bold'
        className='mb-4 underline'
      >
        Fortfarande osäker? Se Hugos moodboard
      </Text> */}
      <AccordionItem title='Fortfarande osäker? Se Hugos moodboard'>
        <Text elementType='p' size='base' className='mb-4'>
          Hugo har testat alla stilar så att du slipper. Algoritmen är 3 år
          gammal, kreativ och väldigt tillåtande.
          <b className='block mt-1'>
            Slutsats: Allt funkar. Välj det som känns bäst för dig.
          </b>
        </Text>
        <div className={wrapperClasses}>
          <div>
            <figure className={figureClasses}>
              <img src='./moodboard-1.jpg' />
            </figure>

            <figure className={figureClasses}>
              <img src='./moodboard-8.jpg' />
            </figure>
            <figure className={figureClasses}>
              <img src='./moodboard-3.jpg' />
            </figure>
            {/* <figure className={figureClasses}>
              <img src='./moodboard-4.jpg' />
            </figure> */}
          </div>
          <div>
            {/* <figure className={figureClasses}>
              <img src='./moodboard-5.jpg' />
            </figure> */}
            <figure className={figureClasses}>
              {/* <img src='./moodboard-9.jpg' /> */}
              <img src='./moodboard-12.jpg' />
            </figure>
            <figure className={figureClasses}>
              <img src='./moodboard-6.jpg' />
            </figure>
            {/* <figure className={figureClasses}>
              <img src='./moodboard-7.jpg' />
            </figure> */}
          </div>
          <div>
            {/* <figure className={figureClasses}>
              <img src='./moodboard-8.jpg' />
            </figure> */}
            <figure className={figureClasses}>
              {/* <img src='./moodboard-9.jpg' /> */}
              <img src='./moodboard-11.jpg' />
            </figure>

            <figure className={figureClasses}>
              {/* <img src='./moodboard-9.jpg' /> */}
              <img src='./moodboard-13.jpg' />
            </figure>
            <figure className={figureClasses}>
              {/* <img src='./moodboard-9.jpg' /> */}
              <img src='./moodboard-14.jpg' />
            </figure>
          </div>
        </div>
      </AccordionItem>
    </section>
  );
};

// 2/11/12/13

export default Moadboard;
