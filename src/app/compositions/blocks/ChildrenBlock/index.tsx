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

const innerClasses = classNames(
  'grid grid-cols-2 gap-12',
  'bg-surface',
  'p-16 rounded-3xl',
);

const textWrapperClasses = classNames(
  'text-left',
  'flex flex-col justify-center',
);

const videoWrapperClasses = classNames(
  'relative',
  'flex flex-col justify-center',
  'text-left',
  'rounded-3xl aspect-square overflow-hidden',
);
const ChildrenBlock: FC = () => {
  return (
    <section className={wrapperClasses} data-component-name='ChildrenBlock'>
      <MaxWidth className={innerClasses}>
        <div className={textWrapperClasses}>
          <Text
            elementType='h2'
            size='headline-2'
            weight='bold'
            className='mb-4 !max-w-[370px]'
          >
            Barn på bröllopet – vilka är med?
          </Text>
          <Text elementType='p' size='base' className='mb-4 '>
            Det finns många barn i vår bekantskapskrets – och vi älskar det! Men
            för att hålla firandet någorlunda fritt från totalt kaos har vi
            låtit algoritmen (aka vårt planeringsteam) optimera gäståtkomst, så
            att endast våra egna barn och våra syskonbarn deltar.
          </Text>
          <Text elementType='p' size='base' className='mb-4 '>
            Vi är dock inte omöjliga – går barnvakt inte att lösa, hör av er så
            hittar vi en lösning tillsammans!
          </Text>
        </div>

        <div className={videoWrapperClasses}>
          <video
            width='320'
            height='240'
            muted
            loop
            autoPlay
            className='object-cover h-full w-full absolute -left-[2px]'
          >
            {/* <source
              src='/42D51074-8D80-49A5-9DFA-154F70C4BD30.mp4'
              type='video/mp4'
            /> */}
            <source src='/output.mp4' type='video/mp4' />
            Your browser does not support the video tag.
          </video>
        </div>
      </MaxWidth>
    </section>
  );
};

export default ChildrenBlock;

// ffmpeg -i 3ECEC371-95F3-4AA9-9DA4-4281B132F550.mov -vcodec h264 -acodec aac output.mp4
