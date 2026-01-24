'use client';
import Text from '@/app/components/Text';
// import Icons from '#components/Icons';
// import Text from '#components/Text';
import classNames from 'classnames';
import {useState, ReactNode, FC} from 'react';

type AccordionItemProps = {
  title: string;
  children: ReactNode;
  contentClasses?: string;
};

const AccordionItem: FC<AccordionItemProps> = ({
  title,
  children,
  contentClasses,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen((prev) => !prev);

  return (
    <div
      // className='border-b border-on-background/5'
      data-component-name='AccordionItem'
    >
      <button
        onClick={handleToggle}
        className='text-left py-3 focus:outline-none flex justify-between w-auto'
      >
        <Text elementType='h3' size='base' weight='bold'>
          {title}
        </Text>
        {/* {isOpen ? <Icons.ChevronUp /> : <Icons.ChevronDown />} */}
        {/* {isOpen ? 'upp' : 'ner'} */}
      </button>
      <div
        className='grid transition-all duration-300 ease-out'
        style={{gridTemplateRows: isOpen ? '1fr' : '0fr'}}
      >
        <div className={classNames('overflow-y-hidden', contentClasses)}>
          <div className=' pt-4 pb-8'>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;
