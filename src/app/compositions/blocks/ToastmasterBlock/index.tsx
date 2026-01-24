import classNames from 'classnames';
import {FC} from 'react';
import MaxWidth from '@/app/components/MaxWidth';
import Text from '@/app/components/Text';

type HeroProps = {
  title?: string;
};

const wrapperClasses = classNames(
  'text-on-background',
  'text-center',
  'p-12',
  'w-full',
);

const HeroBlock: FC<HeroProps> = () => {
  return (
    <section className={wrapperClasses} data-component-name='HeroBlock'>
      <Text
        elementType='h2'
        size='headline-2'
        font-weight='bold'
        className='mb-8'
      >
        Tal & Toastmasters
      </Text>
      <MaxWidth className='grid grid-cols-2 gap-12'>
        <div className='rounded-3xl text-left'>
          <Text
            elementType='p'
            size='base'
            weight='bold'
            className='mb-4 font-sans text-[24px]'
          >
            Efter simuleringar och känsloanalys har vi kommit fram till följande
            protokoll:
          </Text>
          <ul className='mb-8'>
            <li>👉 Det viktigaste för oss är att alla har kul.</li>
            <li>👉 Ingen behöver hålla tal om det inte känns rätt.</li>
          </ul>
          Oavsett om du är förälder, syskon, vän eller algoritmkompis: ditt
          deltagande i firandet räknas mer än din public speaking. Om du vill
          och vågar, hojta gärna till – annars, bara njut av festen och skratt
          😄.
        </div>
        {/* {title && (
          <Text elementType='h1' size='sm' weight='bold' className='mb-4'>
            {title}
          </Text>
        )} */}
        <div className='flex flex-col justify-center text-left'>
          <Text
            elementType='h2'
            size='sm'
            weight='bold'
            className='mb-4 font-sans text-[24px]'
          >
            Kontakt med våra toastmasters
          </Text>{' '}
          Om du vill planera ett tal eller har frågor, kontakta våra fantastiska
          toastmasters:
          <div className='bg-surface mt-4 p-4 rounded-2xl'>
            ➡️ [Namn] – [telefon / e-post]
          </div>
          <div className='bg-surface my-2 p-4 rounded-2xl'>
            ➡️Namn] – [telefon / e-post]
          </div>
          De finns här för att peppa, stötta och guida – utan stress eller press
          💌✨
        </div>
      </MaxWidth>
    </section>
  );
};

export default HeroBlock;
