'use client';
import classNames from 'classnames';
import {PropsWithChildren} from 'react';

type MaxWidthProps = PropsWithChildren<{
  width?: Width;
  className?: string;
}>;

export type Width = 'default' | 'md';

const widthClasses: Record<Width, string[]> = {
  default: ['max-w-[1400px] w-full-with-offsets md:w-full-with-offsets-lg'],
  md: ['max-w-[1400px] w-full-with-offsets-lg'],
};

const MaxWidth = ({width = 'default', children, className}: MaxWidthProps) => {
  const classes = classNames('mx-auto', widthClasses[width], className);

  return <div className={classes}>{children}</div>;
};

export default MaxWidth;
